const mongoose = require('mongoose')


const schema = new mongoose.Schema({

    phone:{
        type:String,
        require:false
    },
    email:{
        type:String,
        require:false
    },
},{
    timestamps:true
})

const model = mongoose.models.Ban || mongoose.model('Ban',schema)

export default model