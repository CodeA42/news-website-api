const router = require("express").Router();
const Article = require("../../models/articles.model");

router.get("/:id", async (req, res) => {
    try {
      const article = await Article.findById(req.params.id).exec();
      let articleObj = article.toObject();
  
      res.status(200).json(articleObj);
    } catch (e) {
      res.status(404).json("Not found");
    }
  
});

router.get("/", (req, res) => {
  try {
    Article.find().exec(function(err, articles){
      res.status(200).json(articles);
    });
    
  } catch(e) {
    console.error(e);
    res.status(404).json("Err");
  }
});
  
module.exports = router;