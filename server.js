/**
 * Created by Dominick Martelly on 7/6/2016.
 */
var http = require('http');
var fs = require('fs');

function send404(File, response) {
    response.writeHead(404, {"Context-Type": "text/plain"})
    response.write('The request for ' + File + ' was not found')
    response.end();
}

//Handling a user request
//Request is from the client. Response is what the server sends back
function onRequest(request, response) {
    console.log('Request is called for [' + request.url + ']')

    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Context-Type": "text/html"})
        fs.createReadStream('./index.html').pipe(response);

    } else {
        send404(request.url, response);
    }
}

http.createServer(onRequest).listen(8888);
console.log('Server is on');