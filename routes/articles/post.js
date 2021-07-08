const router = require("express").Router();
const Article = require("../../db/models/articles.model");

router.post("/create", async (req, res) => {
    const article = new Article();
  
    article.title = req.body.title;
    article.body = req.body.body;
    article.authors = req.body.authors;
    article.postDate = req.body.date;
    article.postedBy = req.body.postedBy;
    article.comments = req.body.comments || [];
  
    try {
      const saved = await article.save();
      const savedObj = saved.toObject();
      res.status(200).json(savedObj);
    } catch (e) {
      console.error(e);
      res.status(418).json("Nono: " + e);
    }
  });

  
module.exports = router;