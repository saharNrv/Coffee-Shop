const mongoose = require('mongoose')
require('./User')
require('./Product')

const wishListSchema = new mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    },

}, {
    timestamps: true
})


const wishListModel = mongoose.models.WishList || mongoose.model('WishList', wishListSchema)

export default wishListModel