'use strict'

const busLocation = require('../model/busLocation')

exports.getInfoById = function* (){
	console.log("this.params.id",this.params.id)
  let result = yield busLocation.findOne({busId:this.params.id})
  if(!result) result = {}
  this.body = result;
}