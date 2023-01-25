const mongoose = require('mongoose')

const SubscribeFormSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('SubscribeFormModel' , SubscribeFormSchema)