const mongoose = require("mongoose");
const { mongo_db } = require("../configuration");

module.exports.connectDB = () => {
    mongoose.connect(mongo_db, { useNewUrlParser: true });
    return mongoose.connection;
}
