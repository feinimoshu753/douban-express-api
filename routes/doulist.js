var express = require('express');
var request = require('request');
var router = express.Router();

//虚构类图书
router.get('/', function (req, res, next) {
    var id = req.param('id') ? req.param('id') : 0;
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/doulist/' + id + '/items?start=' + start + '&count=' + count;
    request(url, function (error, response, body) {
        res.send(body);
    });
});

module.exports = router;
