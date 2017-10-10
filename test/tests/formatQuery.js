const expect = require('chai').expect;
const formatQuery = require('../../src');

describe('Format query test', () => {
	const expectedQuery = 'abc;';
	it('Should add semicolon in the end', () => {
		const query = 'abc';
		expect(formatQuery(query)).to.equal(expectedQuery);
	});

	it('Should left query the same', () => {
		const query = 'abc;';
		expect(formatQuery(query)).to.equal(expectedQuery);
	});

	it('Should trim spaces', () => {
		const query = ' abc; ';
		expect(formatQuery(query)).to.equal(expectedQuery);
	});

	it('Should trim spaces and add semicolon', () => {
		const query = ' abc; ';
		expect(formatQuery(query)).to.equal(expectedQuery);
	});
});
