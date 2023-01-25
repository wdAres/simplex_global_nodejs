const mongoose = require('mongoose')

const ContactFormSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    message:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('ContactFormModel' , ContactFormSchema)