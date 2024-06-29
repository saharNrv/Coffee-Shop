const mongoose = require('mongoose')
require ('./Product')

const commentSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default:5
    },
    date: {
        type: Date,
        default: () => Date.now(),
        immutable: false
    },
    productID: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }

})


const commentModel = mongoose.models.Comment || mongoose.model('Comment',commentSchema)

export default commentModel