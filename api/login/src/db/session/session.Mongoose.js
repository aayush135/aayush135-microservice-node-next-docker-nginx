const mongoose =require( "./node_modules/mongoose");
const mongooseSession=()=>{
    mongoose.connect(
        "mongodb://mongodb:27017/SESSION",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err) => {
          if (err) {
            console.error("FAILED TO CONNECT SESSION MONGODB");
            console.error(err);
          } else {
            console.log("CONNECTED TO SESSION MONGODB");
          }
        }
      );
}

module.exports = exports = mongooseSession; 