import express, { Router } from "express";

const router: Router = express.Router();

router.use("/like/:postId", require("./like"));

module.exports = router;
