'use strict'

const Bus = require('../model/bus')

exports.getInfoById = function* (){
  let result = yield Bus.findOne({busId:this.params.id})
  this.body = result;
}