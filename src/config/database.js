const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kenam:Atlas%40123@devchat.wxaw2.mongodb.net/devChat"
  );
};

module.exports={
    connectDB
}
