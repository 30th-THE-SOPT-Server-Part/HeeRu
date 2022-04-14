import express, { Router } from "express";

const router: Router = express.Router();

router.use("/signup", require("./signup"));

module.exports = router;
