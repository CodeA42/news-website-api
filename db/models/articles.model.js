const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    postDate: { type: Date, default: Date.now },
    authors: [String],
    postedBy: { type: String, required: true },
    comments: [String],
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
