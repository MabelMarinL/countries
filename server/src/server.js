const express = require("express");
const router = require("./routes/indexRoute");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

// --middleware
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());



server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
   res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
   next();
});
      
      
server.use("/countries", router);
      
server.use((err, req, res, next) => {
   const status = err.status || 500;
   const message = err.message || err;
   console.error(err);
   res.status(status).send(message);
})


module.exports = server;
