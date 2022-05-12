const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    creator: {
        type: String,
        required: true
    },
    // mapView: {type:mongoose.Schema.Types.ObjectId, ref: ''},
    street:{ type:String},
    city:{ type:String},
    state:{ type:String},
    postalCode:{ type:String},
    lng: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    }
},
{timestamps:true}) 


module.exports = mongoose.model("Pin", PinSchema);