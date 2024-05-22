const mongoose = require('mongoose')

const connectToDB = () => {

    try {
        if (mongoose.connections[0].readyState) {
            return true
        } else {
            mongoose.connect(process.env.MONGO_URL)

            console.log('Connected To DB Successfully :)');
        }

    } catch (err) {

        console.log('DB connections has error =>', err);
    }

}


export default connectToDB