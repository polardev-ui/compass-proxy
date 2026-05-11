const http = require('http');
const Unblocker = require('unblocker');

const unblocker = new Unblocker({
    prefix: '/proxy/',
    requestMiddleware: [
        (data) => {
            data.headers['host'] = 'compass-proxy.xs001.jrnm.app';
        }
    ]
});

http.createServer((req, res) => {
    unblocker(req, res, (err) => {
        if (err) {
            res.writeHead(500);
            res.end(err.stack || err.toString());
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('proxy is active and anonymization is active - compassplate - https://play.wsgpolar.tech');
    });
}).listen(process.env.PORT || 8080);
