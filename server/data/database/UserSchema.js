var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    id: String,
    name: String,
    create_time: { type: Date, default: Date.now }
});

module.exports = UserSchema;

/*
  just define User Schema.
*/
