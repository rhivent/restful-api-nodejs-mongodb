let mongoose = require('mongoose');
let schema = mongoose.Schema;

let blogSchema = new schema({
  title : String,
  author : String,
  body : String,
});

module.exports = blogSchema;