const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'USER'
    },
    refreshToken:{
        type:String,
    },
})

const userModel = mongoose.models.User || mongoose.model('User',userSchema)

export default userModel