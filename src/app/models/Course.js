const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255},
    description:{ type: String, maxLength: 600},
    image:{ type: String, naxLength: 255},
 //   createdAt: { type:Date, default: Data.now},
  //  updateAt: {  type: Date, default: Data.now},
  });

module.exports = mongoose.model('Course', Course);