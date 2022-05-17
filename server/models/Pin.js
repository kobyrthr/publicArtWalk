const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    creator: {
        type: String,
        required: true
    },
    Artist:{type:String},
    Street:{ type:String},
    City:{ type:String},
    State:{ type:String},
    PostalCode:{ type:String},
    lng: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    img_url:{
        type: String
    }
},
{timestamps:true}) 


module.exports = mongoose.model("Pin", PinSchema);