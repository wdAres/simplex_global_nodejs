const mongoose = require('mongoose')

const HomeFormSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required:true
    },
    number:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    message:{
        type: String,
        required:true
    },
    country:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('HomeFormModel' , HomeFormSchema)