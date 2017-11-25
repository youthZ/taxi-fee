module.exports = function main(miles,waitMinute) {
    var sumFee = 0;
	if(miles <= 2){
		sumFee += 6 + parseInt((waitMinute * 0.25).toFixed(0));
	}

	if(miles > 2 && miles <= 8){
		sumFee += 6 + parseInt((waitMinute * 0.25).toFixed(0)) + parseInt(((miles-2) * 0.8).toFixed(0));
	}

	if(miles > 8 ){
		sumFee = 6 + parseInt((waitMinute * 0.25).toFixed(0)) + parseInt((6 * 0.8).toFixed(0)) + parseInt(((miles-8) * 1.2).toFixed(0));
	}

	return sumFee;
};