const express = require("express");
const router = express.Router();
const Cust = require("../models/CustModel");

router.route("/").post((req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const curBal = req.body.curBal;
    const num = req.body.num;
    const pWord = req.body.pWord;
    const newCust = new Cust({
        name,
        email,
        curBal,
        num,
        pWord
    });
    newCust.save();
})
router.route("/AllCust").get((req,res) => {
    Cust.find()
        .then(foundCust => res.json(foundCust))
})

module.exports = router;