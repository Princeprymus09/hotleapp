const mongoose = require("mongoose");


const mongoURL = "mongodb://fsdsharmas77:<qwer1234>@ac-j9dooke-shard-00-00.qt4ixva.mongodb.net:27017,ac-j9dooke-shard-00-01.qt4ixva.mongodb.net:27017,ac-j9dooke-shard-00-02.qt4ixva.mongodb.net:27017/?ssl=true&replicaSet=atlas-cz062s-shard-0&authSource=admin&retryWrites=true&w=majority" 
  
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB connected succesfully");
});

connection.on("error", () => {
  console.log("Mongo DB connection failed");
});

module.exports = mongoose;
