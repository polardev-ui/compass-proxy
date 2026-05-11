const http = require('http');
const Unblocker = require('unblocker');

const unblocker = new Unblocker({
    prefix: '/proxy/'
});

http.createServer((req, res) => {
    unblocker(req, res, (err) => {
        if (err) {
            res.writeHead(500);
            res.end(err.stack || err.toString());
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('compassplate proxy is running and functional. use /proxy/https://google.com to browse.');
    });
}).listen(process.env.PORT || 8080);
