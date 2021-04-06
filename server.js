// server.js
const express = require('express');
const server = express();

server.get("/json", (req, res) =>{
	res.json({message: "hello world", view_more: "https://github.com/srBruning/express-in-5"});
});


server.use('/cursos', express.static('apps/cursos'));


const port = 3939;

server.listen(port, () =>{
	console.log(`Server listing at ${port}`);
});