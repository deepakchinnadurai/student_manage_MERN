const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    roll:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,

    },

    yoj:{
        type:String,
        required:true,
    },
    yop:{
        type:String,
        required:true,
    },
    hostel:{
        type:String,
        required:true,
    },
    room:{
        type:String,
       required:true,
    },
}) 

const Userdb = mongoose.model("user",schema);
module.exports = Userdb;