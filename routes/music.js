var express = require('express');
var request = require('request');
var router = express.Router();

//华语新碟榜
router.get('/chinese', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/music_chinese/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//欧美新碟榜
router.get('/occident', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/music_occident/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//日韩新碟榜
router.get('/japan_korea', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/music_japan_korea/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});


module.exports = router;
