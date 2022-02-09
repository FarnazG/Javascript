var http = require('http'); // Import Node.js core module

const server = http.createServer(function (req, res) {//create web server


    if (req.url == "/api/score?student_id=11111") {//check the URL of the current request
	//set response header
        res.writeHead(200, { 'Content-Type': 'application/json' });
	//set response content
        res.write(JSON.stringify({id: "11111", name: "Bruce Lee", score: "84"}));
        res.end();

    } 
    else if (req.url == "/api/score?student_id=22222") {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify({id: "22222", name: "Jackie Chen", score: "93"}));
        res.end();

    } 
    else if (req.url == "/api/score?student_id=33333") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({id: "33333", name: "Jet Li", score: "88"}));
        res.end();

    }
    else {

        res.end('Invalid request');
    }

});

server.listen(8000); //listen for any incoming requests

console.log('Node.js server is running on port 8000 ...');
