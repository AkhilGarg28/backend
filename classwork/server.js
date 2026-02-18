// const http = require('http');
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === '/' && method === 'GET') {
//         res.end('Hello, World!');
//     }
//     console.log(url, method);
// });
// server.listen(4000, () => {
//     console.log('Server is running on http://localhost:4000');
// });

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const logFile = path.join(__dirname, 'log.txt');

const server = http.createServer((req, res) => {
    const timestamp = new Date().toLocaleString();
    const logEntry = `[${timestamp}] Method: ${req.method} | Path: ${req.url}\n`;

    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error(err);
    });

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Request logged.');
});

server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});