const router = require("express").Router();
const Article = require("../../models/articles.model");
const { authenticateToken } = require("../../utils/middlewares");

router.get("/:id", authenticateToken, async (req, res) => {
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