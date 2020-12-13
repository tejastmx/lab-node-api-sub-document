const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://Classname:root@cluster0.zmkqm.mongodb.net/Classname?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then((ok) => console.log("Mongoose is connected"))
  .catch((err) => console.log("Error occured while connecting mongoose"));

module.exports = mongoose;
