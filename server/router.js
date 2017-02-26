var express = require('express');
var router = express.Router();

// 对所有(/)URL或路由返回index.html
router.get('/', function (req, res) {
    res.render('index');
});

// 新增接口路由
router.get('/data/:module', function (req, res, next) {
    var c_path = req.params.module;
    var Action = require('./action/data/' + c_path);
    Action.execute(req, res);
});

// 新增接口路由 用来获取指定ID的article
router.get('/api/article/:articleId', function (req, res, next) {
    var Action = require('./action/data/getArticle');
    Action.execute(req, res);
});

// 新增接口路由 用来获取所有articles
router.get('/api/articles/', function (req, res, next) {
    var Action = require('./action/data/getArticles');
    Action.execute(req, res);
});

module.exports = router;
