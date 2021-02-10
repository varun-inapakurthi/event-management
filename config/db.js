const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false

        }, () => console.log("Db connected"))
    } catch (error) {
        console.log('Error : ' + error);
        process.exit(1)

    }
}

module.exports = connectDB;