var Article = require('./Article.js');

var MessageList = [

{ "Message":"Hello React"},

{ "Message":"Hello Webpack"},

{ "Message":"Hello Nodejs"},

{ "Message":"Hello Express"}

];

exports.getMessageList = function (callback) {
    //Article.find(callback);
    callback(MessageList);
};

exports.getArticleById = function (callback) {
    // todo
}