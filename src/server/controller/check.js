'use strict'

exports.upload = function * () {
  let file = this.request.file
  console.log('upload --', file)
  this.status = 201
  this.body = file
}
