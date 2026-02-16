const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/' && method === 'GET') {
        res.end('Hello, World!');
    } else if (url === '/about' && method === 'GET') {
        res.end('This is the about page.');
    }
    console.log(url, method);
});
    server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
