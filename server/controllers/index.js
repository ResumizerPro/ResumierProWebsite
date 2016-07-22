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
    if (fileExists('client' + req.url + '.html')) {
        res.render(req.url);
    }
    else if (fileExists('client' + req.url + '.ejs')) {
        res.render(req.url);
    }
    //404
    else {
        send404(req.url, res);
    }
};

exports.renderIndex = function (req, res) {
    res.render('index');
};

exports.renderFunctional = function (req, res) {
    res.render('functional');
};

exports.renderCombination = function (req, res) {
    res.render('combination');
};

exports.renderTargeted = function (req, res) {
    res.render('targeted');
};
