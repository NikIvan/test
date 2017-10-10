// const bluebird = require('bluebird');
// global.Promise = bluebird;

const pino = require('pino');
const util = require('util');

global.logger = pino();

const interval = setInterval(() => {
	logger.info(`Current memory usage of ${process.pid}: ${util.inspect(process.memoryUsage(), {depth: 3})}`);
}, 200);


