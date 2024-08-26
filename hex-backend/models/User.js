const mongoose = require ('mongoose')
const {Schema} = mongoose;
let indianTime = new Date().toLocaleString("en-Us", {timeZone: 'Asia/Kolkata'});   // to get indian date and time


// creating a model which has a schema 
const userSchema = new Schema ({
    name : {
        type : String , 
        required : true 
    },
    email : {
        type : String , 
        required : true ,
        unique : true 
    },
    password : {
        type : String , 
        required : true 
    },
    date : {
        type : String, 
        default : indianTime
    }
})

module.exports = mongoose.model('user', userSchema);