const router = require("express").Router();
const User = require("../../models/users.model");

router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id).exec();
      let userObj = user.toObject();
  
      return res.status(200).json(userObj);
    } catch (e) {
      return res.status(404).json("User not found");
    }
  
});
  
module.exports = router;