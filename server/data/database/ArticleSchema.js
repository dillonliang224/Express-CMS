var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
    id: String,
    title: String,
    author: {
        id: String,
        name: String,
        avatar: String
    },
    meta: {
        publish_time: { type: Date, default: Date.now },
        wordage: String
    },
    image: String,
    content: String,
    abstract: String,
    is_from_jianshu: Boolean,
    create_time: { type: Date, default: Date.now }
});

module.exports = ArticleSchema;

/*
  just define Article Schema.
*/
