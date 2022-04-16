import express, { Router } from "express";

const router: Router = express.Router();

router.use("/", require("./like"));

module.exports = router;
