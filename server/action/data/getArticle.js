var getArticle = require('../../data/getArticle.js');

exports.execute = function (req, res) {
     var articleId = req.params.articleId;
     getArticle.getArticle(articleId = {id: '72afb04dc957'}, function (data) {
         //console.log('res send data:' + data[2]);
         //console.log('data length: ' + data.length);
         res.send(data);
     });
};