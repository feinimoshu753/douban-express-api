var express = require('express');
var request = require('request');
var router = express.Router();

//华语新碟榜
router.get('/chinese', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/music_chinese/items?start='+ start +'&count=' + count;
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//欧美新碟榜
router.get('/occident', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/music_occident/items?start='+ start +'&count=' + count;
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//日韩新碟榜
router.get('/japan_korea', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/music_japan_korea/items?start='+ start +'&count=' + count;
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//分类
router.get('/classification', function (req, res, next) {
    var type = req.param('type') ? req.param('type') :'';
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/filter_music_'+ type +'_hot/items?start=' + start + '&count=' + count;
    request(url, function (error, response, body) {
        res.send(body);
    });
});

//详情
router.get('/detail', function (req, res, next) {
    var id = req.param('id') ? req.param('id') :'';
    var url = 'https://m.douban.com/rexxar/api/v2/music/' + id;
    request(url, function (error, response, body) {
        res.send(body);
    });
});

//评论列表
router.get('/comments', function (req, res, next) {
    var id = req.param('id') ? req.param('id') : '';
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/music/' + id + '/interests?order_by=hot?start=' + start + '&count=' + count;
    request(url, function (error, response, body) {
        res.send(body);
    });
});

module.exports = router;
