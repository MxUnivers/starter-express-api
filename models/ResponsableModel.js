

const  mongoose = require("mongoose");

const  ResponsableSchema =  new mongoose.Schema(
    {
        
        name:{
            type:String,
            required:true,
        },
        coverPicture:{
            type:String,
            required:false,
        },
        description:{
            type:String,
            default:"responsable de ",
            required:false
        },
    }
    ,
    {
        timestamps:true
    }
)

const  Responsable = mongoose.model("responsable",ResponsableSchema);

module.exports = Responsable ;