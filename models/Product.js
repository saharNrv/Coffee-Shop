const mongoose = require('mongoose')
require('./Comment')


const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    suitableFor: {
        type: String,
        required: true
    },
    smell: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    comments: {
        type: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        required: true
    },

})



const productModel = mongoose.models.Product || mongoose.model('Product', commentSchema)

export default productModel