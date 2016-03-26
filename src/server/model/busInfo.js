'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  busId:String,
  location: String,
  time: Date
})

module.exports = mongoose.model('BusInfo', schema)