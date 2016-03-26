'use strict'

const User = require('../model/user')

exports.index = function * () {
  // let id = this.session.user._id
  // let result = yield User.findProfile(id)
  this.body = {code:0, msg:'hello bus'}
}