const mongoose = require("mongoose");
const resourceNameSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Error message if this field is not present"],
        default: "Default value",
        unique: true
    },
    
});

const ResourceName = mongoose.model("ResourceName", resourceNameSchema);
module.exports = ResourceName;