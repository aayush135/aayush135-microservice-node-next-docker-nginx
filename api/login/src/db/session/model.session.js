const mongoose =require('mongoose')

const { Schema } = mongoose;

const sessioinSchema=new Schema({
    token:{type:String}
})

module.exports=exports= mongoose.model('Session',sessioinSchema);