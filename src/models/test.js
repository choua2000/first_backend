const mongoose = require('mongoose');
const modelSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tel:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('Test', modelSchema);