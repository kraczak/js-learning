let http = require('http');
let url = require('url');
let querystring = require('querystring');
let nodeStatic = require('node-static');
let fileServer = new nodeStatic.Server('.');

function onDigits(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
    });

    let i = 0;
    let timer = setInterval(write, 500);

    function write() {
        i++;
        if (i === 4) {
            res.write('event: bye\ndata: bye-bye\n\n');
            clearInterval(timer);
            res.end();
            return;
        }
        res.write(`id: ${i}\ndata: ${i}\n\n`);
    }

}

function accept(req, res) {
    if (req.url === '/digits') {
        onDigits(req, res);
        return;
    }

    fileServer.serve(req, res);
}

let port = 8080;
console.log(`Starting server on http://localhost:${port}`)
http.createServer(accept).listen(port);