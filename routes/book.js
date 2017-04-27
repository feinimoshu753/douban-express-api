var express = require('express');
var request = require('request');
var router = express.Router();

//虚构类图书
router.get('/fiction', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//非虚构类图书
router.get('/nonfiction', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//纸质书
router.get('/market_product', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});



module.exports = router;
