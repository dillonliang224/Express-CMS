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

exports.find = function () {
    Article.find({}, function (err, articles) {
        console.log('articles: ' + articles.toString());
    })
}