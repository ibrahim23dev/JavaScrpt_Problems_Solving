const {model, Schema}=require("mongoose")

const CategorySchema=new Schema({

    name:{
        type:String,
        require: true
    },
    image:{
        type:String,
        require: true
    },
    slug:{
        type:String,
        require: true
    },
},
    {timestamps: true})

    CategorySchema.index({
        name:'text'
    })
module.exports=model('Category',CategorySchema);