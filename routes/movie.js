var express = require('express');
var request = require('request');
var router = express.Router();

//影院热映
router.get('/showing', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//免费在线观看
router.get('/free', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});

//新片速递
router.get('/latest', function (req, res, next) {
    var url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?start=0&count=10';
    request(url,function (error,response,body) {
        res.send(body);
    });
});



module.exports = router;
