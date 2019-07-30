const mongoose = require ('mongoose')

const schemaMemories = new mongoose.Schema ({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
},{
    timestamps:true
})

const Memory = mongoose.model ('Memory',schemaMemories)

module.exports=Memory