let http = require('http');
let url = require('url');


let subscribers = new Set();

subscribers.toArray = function () {
    return Array.from(this);
}

function accept(req, res) {
    let urlParsed = url.parse(req.url, true);

    if (urlParsed.pathname === '/subscribers') {
        res.writeHead(200, {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Credentials': true
        });
        if (req.method === 'GET') {

            res.end(JSON.stringify(subscribers.toArray()));
        } else if (req.method === 'POST') {
            let body = '';
            req.on('data', data => body += data);

            req.on('end', () => {
                let newSubscriber = JSON.parse(body);
                let message, statusCode;
                if (subscribers.has(newSubscriber.email)){
                    message = {message: `${newSubscriber.email} already exists!`};
                    statusCode = 409;
                } else {
                    subscribers.add(newSubscriber.email);
                    message = {subscriber: newSubscriber.email};
                    statusCode = 201;
                }
                res.statusCode = statusCode;
                res.end(JSON.stringify(message));
            });

        }
    }
}

console.log(`Server running on http://localhost:8080`);
http.createServer(accept).listen(8080);

