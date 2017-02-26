var Article = require('../data/Article.js');

/*
  this file is used to handle Article service
*/

var ArticleAction = {
  findArticleById: function (req, res) {
    var articleId = req.params.articleId;
    Article.findArticleById(articleId, function (data) {
      res.send(data);
    });
  },

  findArticles: function (req, res) {
    Article.findArticles(function (data) {
      res.send(data);
    });
  }
}

module.exports = ArticleAction;
