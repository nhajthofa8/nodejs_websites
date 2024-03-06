const mongoose = require('mongoose');


async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/admin', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('successfully');
    }
    catch (error){
        console.log('Connected failure');
    }

}
module.exports = { connect };