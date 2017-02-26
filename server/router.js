var express = require('express');
var router = express.Router();

// 对所有(/)URL或路由返回index.html
router.get('/', function (req, res) {
    res.render('index');
});

// 新增接口路由 用来获取指定ID的article
router.get('/api/article/:articleId', function (req, res, next) {
    var Action = require('./action/Article').findArticleById;
    Action(req, res);

});

// 新增接口路由 用来获取所有articles
router.get('/api/articles/', function (req, res, next) {
    var Action = require('./action/Article').findArticles;
    Action(req, res);
});

module.exports = router;

/*
  define app router and action.
*/
