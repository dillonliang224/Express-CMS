var Article = require('./database/index.js');

/*
 this file is used to handle Article database
*/
exports.save = function (article) {
    new Article(article).save(article, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log('save user successfully');
        }
    })
}

exports.findArticles = function (callback) {
    Article.find({}, function (err, articles) {
        if (!err) {
            console.log('articles: get article data done');
            callback(articles);
        } else {
            console.log('dillon: you need to know, get articles has error');
        }
    })
}

exports.findArticleById = function (articleId, callback) {
    Article.find({"id": articleId}, function (err, article) {
        if (!err) {
            console.log('get article with article id: ' + articleId);
            callback(article);
        };
    })
}
