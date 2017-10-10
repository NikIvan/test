const Mocha = require('mocha');
const path = require('path');
const fs = require('fs');

const mocha = new Mocha();
const testDir = path.join(__dirname, './tests');

fs.readdirSync(testDir)
.filter((file) => {
	return file.substr(-3) === '.js';
})
.forEach((file) => {
	mocha.addFile(path.join(testDir, file));
});

// Run the tests.
mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures);  // exit with non-zero status if there were failures
  });
});