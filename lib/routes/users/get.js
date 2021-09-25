const router = require("express").Router();
const User = require("../../models/users.model");
const { checkAuthenticated } = require('../../utils/middlewares');

router.get("/:id", checkAuthenticated, async (req, res) => {
    try {
      const user = await User.findById(req.params.id).exec();
      let userObj = await user.toObject();
  
      return res.status(200).json(userObj);
    } catch (e) {
      return res.status(404).json(e);
    }
  
});
  
module.exports = router;