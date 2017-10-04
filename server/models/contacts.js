const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let contactsSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    notes: String
})

let ContactsModel = mongoose.model("contacts", contactsSchema);
module.exports = ContactsModel;