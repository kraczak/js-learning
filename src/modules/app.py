import os
from urllib.request import Request

import uvicorn as uvicorn
from fastapi import FastAPI, UploadFile, File
from starlette.middleware.cors import CORSMiddleware
from pymemcache.client import base
app = FastAPI(
    docs_url='/_swagger',
    redoc_url=None,
)

origins = ["*"]

cache = base.Client(('localhost', 11211))


@app.middleware("logger")
async def log_headers(request: Request, call_next):
    print(f"""
    Method: {request.method}
    Headers: {request.headers}
    """)
    response = await call_next(request)
    return response
ą

@app.get('/')
async def index():
    return {}


@app.put('/')
async def index():
    return {}


@app.post("/upload")
async def upload(file: UploadFile = File(...)):
    try:
        contents = file.file.read()
        cache.set(file.filename, {'status': 'Starting to upload', 'bytes': os.path.getsize("")})
        with open(file.filename, 'wb') as f:
            f.write(contents)
        cache[file.filename] = {'status': 'Successful', 'bytes': os.path.getsize(file.filename)}
    except Exception:
        cache.set(file.filename,  {'status': 'Failed', 'bytes': os.path.getsize(file.filename)})
        return {"message": "There was an error uploading the file"}
    finally:
        file.file.close()
        print(cache)

    return cache.get(file.filename)


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == '__main__':
    uvicorn.run(
        'main:app',
        host='0.0.0.0',
        port=3000
    )
