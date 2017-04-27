var express = require('express');
var request = require('request');
var router = express.Router();

//虚构类图书
router.get('/fiction', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?start='+ start +'&count=' + count;
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//非虚构类图书
router.get('/nonfiction', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?start='+ start +'&count=' + count;
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//纸质书
router.get('/market_product', function (req, res, next) {
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book/items?start='+ start +'&count=' + count;
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//分类
router.get('/classification', function (req, res, next) {
    var type = req.param('type') ? req.param('type') :'';
    var start = req.param('start') ? req.param('start') : 0;
    var count = req.param('count') ? req.param('count') : 10;
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/filter_book_'+ type +'_hot/items?start=' + start + '&count=' + count;
    request(url, function (error, response, body) {
        res.send(body);
    });
});



module.exports = router;
