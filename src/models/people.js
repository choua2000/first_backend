const mongoose = require('mongoose');
const people = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
    
},{timestamps:true});

module.exports = mongoose.model('Employee', people);

//  module.exports = people;