'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Big red button server"); /*
                                       Big red button backend server
                                       by Oran C
                                       oranbusiness@gmail.com
                                       github.com/wisehackermonkey
                                       20190413
                                      */

console.log("started");

var app = (0, _express2.default)();
var port = 3000;
var current = 998;
var db_path = _path2.default.join(__dirname, "db.json");

app.use(_express2.default.static("public"));

app.options('/api/current', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end();
});
app.get('/status', function (request, response) {
    current += 1;
    if (current > 999) {
        current = 0;
    }
    // write to the file

    var json = JSON.stringify(current);
    console.log("Writing to db");
    _fs2.default.writeFileSync(db_path, json);

    response.send(current.toString());
});

app.get('/load', function (request, response) {

    //read from the file
    if (_fs2.default.existsSync(db_path)) {
        console.log("Reading from db");
        try {
            var data = _fs2.default.readFileSync(db_path, "UTF-8");
            console.log(JSON.parse(data));
            current = JSON.parse(data);
        } catch (err) {
            console.log(err);
        }
    }
    response.send(current.toString());
});

app.listen(port, function () {
    return console.log('Example app listening on port ' + port + '!');
});