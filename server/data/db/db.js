var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))

// db.once('open', function() {
//   console.log('connection successfully');
// });

var articleSchema = mongoose.Schema({
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
    content: String,
    is_from_jianshu: Boolean,
    create_time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', articleSchema);