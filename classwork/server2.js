const { constants } = require('crypto');
const http = require('http');
const userData = {
    name: "Akhil",
    age: 20
};
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/' && method === 'GET') {
        res.end('Hello, World!');
    } else if (url === '/about' && method === 'GET') {
        res.end('This is the about page.');
    }else if (url === '/user' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(userData));
    }
    console.log(url, method);
});
    server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
    console.log('Try visiting: http://localhost:4000/user');
    console.log('Try visiting: http://localhost:4000/about');
});


const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.txt');
fs.writeFile(filePath, 'Hello, this is some sample data.', (err) => {
    if (err) {
        console.error('Error writing to file:', err); 
    } else {
        console.log('Data written to file successfully.');
    }
});