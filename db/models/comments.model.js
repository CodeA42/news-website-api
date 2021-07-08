const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  body: { type: String, required: true },
  postedBy: { type: String, required: true },
  created: { type: Date, default: Date.now },
  ownerId: { type: String, required: true },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
