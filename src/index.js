// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

	if (currency > 10000) {
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	} else if (currency == 0) {
		return {};
	} else {
    		var money = new Object;
    		if (currency >= 50){
    			money.H = Math.trunc(currency / 50);
    			currency = currency % 50;
    		}
    		if (currency >= 25){
    			money.Q = Math.trunc(currency / 25);
    			currency = currency % 25;
    		}
    		if (currency >= 10){
    			money.D = Math.trunc(currency / 10);
    			currency = currency % 10;
    		}
    		if (currency >= 5){
    			money.N = Math.trunc(currency / 5);
    			currency = currency % 5;
    		}
    		if (currency >= 1){
    			money.P = currency;
    		}
    	}
    	return money;
}

