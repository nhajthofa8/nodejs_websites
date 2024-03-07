const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/web_xodua_db',{        
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