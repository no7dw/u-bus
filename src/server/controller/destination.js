'use strict'

const Bus = require('../model/bus')
const busLocation = require('../model/busLocation')

exports.getDestionation = function* (){
  var dest = this.params.dest
  var from = this.params.from

  let result = yield [
  	Bus.find({routers: dest}),
  	busLocation.findOne({busId:dest})
  ]
  if(!result) result = {}
  this.body = result
}