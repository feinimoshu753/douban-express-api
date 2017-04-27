var express = require('express');
var request = require('request');
var router = express.Router();

//值得看电视剧
router.get('/domestic', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start='+ start +'&count=' + count;
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//综艺节目
router.get('/variety_show', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?start='+ start +'&count=' + count;
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//热门美剧
router.get('/american', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_american/items?start='+ start +'&count=' + count;
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//分类
router.get('/classification', function (req, res, next) {
    var type = req.param('type') ? req.param('type') :'';
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/filter_tv_'+ type +'_hot/items?start=' + start + '&count=' + count;
    request(url, function (error, response, body) {
        res.send(body);
    });
});

module.exports = router;
