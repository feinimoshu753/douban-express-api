var express = require('express');
var request = require('request');
var router = express.Router();

//影院热映
router.get('/showing', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=' + start + '&count=' + count;
    request(url, function (error, response, body) {
        res.send(body);
    });
});

//免费在线观看
router.get('/free', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?start=' + start + '&count=' + count;
    request(url, function (error, response, body) {
        res.send(body);
    });
});

//新片速递
router.get('/latest', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?start=' + start + '&count=' + count;
    request(url, function (error, response, body) {
        res.send(body);
    });
});

//top250
router.get('/top250', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_top250/items?start=' + start + '&count=' + count;
    request(url, function (error, response, body) {
        res.send(body);
    });
});

//分类
router.get('/classification', function (req, res, next) {
    var type = req.param('type') ? req.param('type') :'';
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/filter_movie_'+ type +'_hot/items?start=' + start + '&count=' + count;
    request(url, function (error, response, body) {
        res.send(body);
    });
});


module.exports = router;
