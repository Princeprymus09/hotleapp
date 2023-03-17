const express = require("express");
 const app = express();


 const dbConfig =  require("./database/db");
 const roomsroutes = require("./routes/roomsRoute");

 app.use("/api/rooms" ,roomsroutes);
 
 const port = process.env.PORT || 5000
  app.listen(port ,()=>console.log("server is started at  port"));