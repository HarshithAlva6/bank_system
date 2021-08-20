const mongoose = require("mongoose");

var db1 = mongoose.createConnection("mongodb+srv://new-upi:testingupi6@freecluster.padj1.mongodb.net/upiDB", {useNewUrlParser: true, useUnifiedTopology: true});
const UPISchema = {
    name: String,
    number: Number,
    recName: String,
    recNum: Number,
    amount: Number,
    desc: String,
    status: Boolean
}
const UPI = db1.model("upi",UPISchema);
module.exports = UPI;