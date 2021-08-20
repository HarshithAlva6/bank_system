const express = require("express");
const router = express.Router();
const UPI = require("../models/UPIModel");

router.route("/").post((req,res) => {
    const name = req.body.name;
    const number = req.body.number;
    const recName = req.body.recName;
    const recNum = req.body.recNum;
    const amount = req.body.amount;
    const desc = req.body.desc;
    const status = req.body.status;
    const newUPI = new UPI({
        name,
        number,
        recName,
        recNum,
        amount,
        desc,
        status
    });
    newUPI.save();
})

router.route("/payments").get((req,res) => {
    UPI.find()
       .then(foundUPI => res.json(foundUPI))
})

module.exports = router;