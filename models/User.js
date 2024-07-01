const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: false
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
        default:'USER',
        require: false
    },
    refreshToken:{
        type:String,
        require: false
    },
})

const userModel = mongoose.models.User || mongoose.model('User', userSchema)

export default userModel