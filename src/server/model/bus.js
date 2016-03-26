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

module.exports = mongoose.model('Bus', schema)