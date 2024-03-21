const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb+srv://huynhnhathoa415305:11092001Az@cluster0.znjh4sd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{        
            useNewUrlParser:true,
            useUnifiedTopology:true,
    });
    console.log('Oke');
    }
    catch (error){
        console.log('Connected failure');
    }

}
module.exports = { connect };