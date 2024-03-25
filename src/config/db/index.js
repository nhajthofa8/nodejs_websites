const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb+srv://huynhnhathoa415305:11092001Az@cluster0.znjh4sd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('ket noi thanh cong api');
    }
    catch (error){
        console.log('Connected failure');
    }

}
module.exports = { connect };