var getArticle = require('../../data/getArticle.js');

exports.execute = function (req, res) {
     getArticle.getArticles(function (data) {
         console.log('--------data length---------: ' + data.length);
         res.send(data);
     });
};
