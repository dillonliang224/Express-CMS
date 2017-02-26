var mongoose = require('mongoose');
var ArticleSchema = require('./ArticleSchema.js');

mongoose.connect('mongodb://localhost/test');

var database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'))

// db.once('open', function() {
//   console.log('connection successfully');
// });

module.exports = mongoose.model('Article', ArticleSchema);

/*
  this file is used to connect mongodb and export database model.
*/
