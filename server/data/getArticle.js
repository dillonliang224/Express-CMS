var Article = require('./Article.js');

exports.getArticle = function (articleId, callback) {
    Article.findArticleById(articleId, callback);
}

exports.getArticles = function (callback) {
    Article.find(callback);
}