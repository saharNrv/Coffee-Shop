const mongoose = require('mongoose')
require ('./Product')

const commentSchema = new mongoose.Schema({

    usernam: {
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
        required: true
    },
    date: {
        type: Date,
        default: () => Date.now(),
        immutable: false
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }

})


const commentModel = mongoose.models.Comment || mongoose.model('Comment',commentSchema)

export default commentModel