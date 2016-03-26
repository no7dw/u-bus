'use strict'

const path = require('path')
const _ = require('lodash')

const baseConfig = {
  app: {
    name: 'u-bus',
    root: path.resolve(__dirname, '/../..'),
    env: process.env.NODE_ENV,
    secret: process.env.SECRET || 'my&&&&&&secret!',
  }
}

const platformConfig = {
  development: {
    app: {
      port: 9000,
      cacheTime: 24 * 60 * 60 * 1000
    },
    mongo: {
      url: process.env.MONGO_URI_DEV || 'mongodb://localhost:27017/u-bus-dev'
    }
  },
  test: {
    app: {
      port: 9002
    },
    mongo: {
      url: process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/u-bus-test'
    }
  },
  production: {
    app: {
      port: process.env.PORT || 9000,
      cacheTime: 7 * 24 * 60 * 60 * 1000
    },
    mongo: {
      url: process.env.MONGO_URI || 'mongodb://localhost:27017/u-bus'
    }
  }
}
const base = baseConfig.app

module.exports = _.merge(baseConfig, platformConfig[base.env ? base.env : base.env = 'development'])
