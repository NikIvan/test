const bunyan = require('bunyan');
const _ = require('lodash');

const log = bunyan.createLogger({
  name: 'Test project',
  level: 'Debug',
  serializers: {
    error: (error) => ({
      message: error.message,
      stack: error.stack,
      json: error.json
    }),
    req: req => ({
      method: req.method,
      url: req.url,
      body: req.body,
      query: req.query,
      headers: _.omit(req.headers, ['Authorization'])
    })
  }
});

module.exports = log;