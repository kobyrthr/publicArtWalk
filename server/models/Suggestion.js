const mongoose = require("mongoose");

const SuggestionSchema = new mongoose.Schema({
    Name:{
        type: String,
    },
    Street:{
        type: String,
        required: true
    },
    Zip_Code:{
        type: String,
        required: true
    },
    Artist_Name:{
        type: String,
    },
    Details:{
        type: String,
    },
    Status:{
        type: String,
    }
},
{timestamps:true})

module.exports = mongoose.model("Suggestion", SuggestionSchema);