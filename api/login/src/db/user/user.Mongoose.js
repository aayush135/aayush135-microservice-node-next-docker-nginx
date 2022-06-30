const mongoose =require( "./node_modules/mongoose");
const  mongooseUser=()=>{
    mongoose.connect(
        "mongodb://mongodb:27017/USER",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err) => {
          if (err) {
            console.error("FAILED TO CONNECT USER MONGODB");
            console.error(err);
          } else {
            console.log("CONNECTED TO USER MONGODB");
          }
        }
      );
}

module.exports = exports = mongooseUser; 