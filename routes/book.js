var express = require('express');
var http = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var request = http.request({
        host: 'api.douban.com',
        path: '/v2/movie/top250'
        },function (sres) {
            sres.pipe(res);
            sres.on('end', function(){
                console.log('done');
            });
        }
    );
    req.pipe(request);
});

module.exports = router;
