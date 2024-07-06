const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({

    email:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    company:{
        type:String,
        require:false
    },
    phone:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:false
    },
})


const contactModel = mongoose.models.Contact || mongoose.model('Contact',contactSchema)

export default contactModel