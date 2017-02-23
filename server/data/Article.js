var Article = require('./db/db');

exports.save = function (article) {
    new Article(article).save(article, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log('save user successfully');
        }
    })
}

exports.find = function (callback) {
    Article.find({}, function (err, articles) {
        if (!err) {
            console.log('articles: get article data done');
            callback(articles)
        } else {
            console.log('dillon: you need to know, get articles has error');
        }
    })
}