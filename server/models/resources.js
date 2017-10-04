const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let resourcesSchema = new Schema({
    resourceName: {
        type: String,
        required: true
    },
    pdfFile: String,
    media: String
})

let ResourcesModel = mongoose.model("resources", resourcesSchema);
module.exports = ResourcesModel;