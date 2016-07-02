'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  busId:String,
  location: Object,//坐标
  station: String //current 站台
})

module.exports = mongoose.model('bus_location', schema)