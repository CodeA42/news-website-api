const router = require("express").Router();

router.use("/users", require("./users/register"));
router.use("/users", require("./users/get"));
router.use("/users", require("./users/login"));

//Article controllers
router.use("/articles", require("./articles/get"));
router.use("/articles", require("./articles/post"));
router.use("/articles", require("./articles/put"));
router.use("/articles", require("./articles/delete"));

router.use("*", (req, res) => {
  res.status(404).json("Invalid request");
});
module.exports = router;
