var fileExists = require('file-exists');

function send404(fileName, res) {
    res.writeHead(404, {"Context-Type": "text/plain"});
    res.write('404\n');
    res.write('The request for ' + fileName + ' was not found');
    res.end();
}

exports.directTo = function (req, res) {
    console.log(req.url);

    //Check if the file exists
    if (fileExists(req.url + '.html')) {
        res.redirect(req.url);
    }
    //404
    else {
        send404(req.url, res);
    }
};

exports.render = function(req, res){
  res.render('index');
}
