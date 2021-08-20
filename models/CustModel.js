const mongoose = require("mongoose");

var db2 = mongoose.createConnection("mongodb+srv://new-upi:testingupi6@freecluster.padj1.mongodb.net/CustDB", {useNewUrlParser: true, useUnifiedTopology: true});
const CustSchema = {
    name: String,
    email: String,
    curBal: Number,
    num: Number,
    pWord: String
}
const Cust = db2.model("Cust",CustSchema);
module.exports = Cust;