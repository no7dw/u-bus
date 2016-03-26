'use strict'

const BusInfo = require('../model/busInfo')

exports.getInfoById = function* (){
  let result = yield BusInfo.findOne({busId:this.params.id})
  if(!result) result = {}
  this.body = result;
}