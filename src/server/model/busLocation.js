'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  busId:String,
  location: Object,
  station: String
})

module.exports = mongoose.model('bus_location', schema)