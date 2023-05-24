const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  nameCommentator: String,
  textComment: String,
  newsId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'News'
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;