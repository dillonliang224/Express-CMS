var express = require('express');
var router = express.Router();

// 对所有(/)URL或路由返回index.html
router.get('/', function (req, res) {
    res.render('index');
});

// 新增接口路由 用来获取指定ID的articl

router.get('/api/article/:articleId', function (req, res, next) {
    var Action = require('./action/Article').findArticleById;
    Action(req, res);

});

// 新增接口路由 用来获取所有articles
router.get('/api/articles/', function (req, res, next) {
    var Action = require('./action/Article').findArticles;
    Action(req, res);
});

router.post('/api/articles/', function (req, res, next) {
    res.send('game');
});

router.put('/api/article/:articleId', function (req, res, next) {
  res.send('delete');
});

router.delete('/api/article/:articleId', function (req, res, next) {
  res.send('delete')
});

module.exports = router;

/*
  define app router and action.
*/
