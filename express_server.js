const express = require('express');
let app = express();
const port = process.env.port || 9999;

app.get('/', (request, response) => {
    response.send('<h1>Hello</h1>');
});

app.get('/api', (request, response) => {
    // response.send('<h1>Api</h1>');
    response.json({name: 'Irshad'});
});

app.get('/post/:id', (request, response) => {
    response.send(`
        <p>Post Id: ${request.params.id}</p>
    `);
});

app.get('/post/:id/category/:category_id', (request, response) => {
    response.send(`
        <p>Post Id: ${request.params.id}</p>
        <p>Category Id: ${request.params.category_id}</p>
    `);
});

app.listen(port);

console.log("Its working");