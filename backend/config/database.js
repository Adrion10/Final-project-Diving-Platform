const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      // useCreateIndex: false,
      useUnifiedTopology: true,
    })
    .then((con) =>
      console.log(`MongoDB database connected with ${con.connection.name}`)
    );
};
module.exports = connectDatabase;
