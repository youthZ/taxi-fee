const main = require('../main/main');

describe('taxi fee', function () {
	it('should return two miles and NO waitMinute fee',function(){
		let miles = 2;
		let waitMinute = 2;
		let sumFee = main(miles,waitMinute);
		let expected = 7;
		expect(sumFee).toEqual(expected);
	});
	
	it('should return more than two miles and less than 8 miles fee',function(){
		let miles = 6;
		let waitMinute = 0;
		let sumFee = main(miles,waitMinute);
		let expected = 9;
		expect(sumFee).toEqual(expected);
	});

	it('should return more than 8 miles fee',function(){
		let miles = 10;
		let waitMinute = 10;
		let sumFee = main(miles,waitMinute);
		let expected = 16;
		expect(sumFee).toEqual(expected);
	});
});
