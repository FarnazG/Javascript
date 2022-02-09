const http = require('http'); // Import Node.js core module

function zeroFill(i) {
   return (i < 10 ? '0' : '') + i
}
function now () {
   const d = new Date()
   return d.getFullYear() + '-'
      + zeroFill(d.getMonth() + 1) + '-'
      + zeroFill(d.getDate()) + ' '
      + zeroFill(d.getHours()) + ':'
      + zeroFill(d.getMinutes())
}

const server = http.createServer(function(req, res) { //create web server
   res.writeHead(200, {'Content-Type': 'text/plain'});

   
   res.end(now()+'\n');
});
server.listen(8000) //listen for any incoming requests
console.log('Node server is running on http://localhost:'+ 8000);
