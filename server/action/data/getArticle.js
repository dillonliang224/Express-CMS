var getArticle = require('../../data/getArticle.js');

exports.execute = function (req, res) {
     var articleId = req.params.articleId;
     getArticle.getArticle(articleId = {id: '72afb04dc957'}, function (data) {
         res.send(data);
     });
};
