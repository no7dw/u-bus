'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  busId:String,
  name: String,
  routers: Array,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

// schema.methods = {

//   find: function (id) {
//     console.log("model ", id);
//     return this.findOne({busId:id}).exec()
//   }

// }
module.exports = mongoose.model('Bus', schema)