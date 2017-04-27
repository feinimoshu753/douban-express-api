var express = require('express');
var request = require('request');
var router = express.Router();

//值得看电视剧
router.get('/domestic', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//综艺节目
router.get('/variety_show', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//热门美剧
router.get('/american', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_american/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});



module.exports = router;
