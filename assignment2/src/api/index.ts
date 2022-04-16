import express, { Router } from "express";

const router: Router = express.Router();

router.use("/auth", require("./routes/auth"));
router.use("/blog", require("./routes/blog"));
router.use("/user", require("./routes/user"));

module.exports = router;
