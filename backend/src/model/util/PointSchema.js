const mongoose = require('mongoose');

const PointShema = new mongoose.Schema({
    type:{
        type:String,
        enum:['Point'],
        required : true,
    },
    coordinates: {
        type:[Number], //Longetude , latitude
        required : true
    }
});