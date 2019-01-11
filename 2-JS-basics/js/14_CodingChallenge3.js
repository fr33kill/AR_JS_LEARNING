var restaurantBills = [124, 48, 268];

var tipArray = function calculateTip(bills) {
    
    var tip = new Array();
    var tipAmount = 0;
    
    for(var i = 0; i < bills.length; i++) {
        if(bills[i] < 50){
            tipAmount = bills[i] * 20/100;
        } else if(50 <= bills[i] < 200) {
            tipAmount = bills[i] * 15/100;
        } else {
            tipAmount = bills[i] * 10/100;
        }
        tip.push(tipAmount);
    }
    return tip;
}

var totalBillWithTip = function(restaurantBills){
    
    var finalBill = new Array();
    var billAmount = 0;
    var tipArr = tipArray(restaurantBills);
    for(var i = 0; i < restaurantBills.length; i++) {
        billAmount = restaurantBills[i] + tipArr[i];
        finalBill.push(billAmount);
    }
    return finalBill;
}
console.log(restaurantBills);
console.log(tipArray(restaurantBills));
console.log(totalBillWithTip(restaurantBills));