const express = require("express");
const router = express.Router()

router.use("/", (req, res, next) => {

    res.status(403).json({msg: "forbidden"})
})

module.exports = router