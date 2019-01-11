//CODING CHALLENGE 5

var john = {
    bills: [124, 48, 268, 180, 42],
    tipCalc: function(){
        var tips = [];
        var fullBillsAmounts = [];
        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            if(bill < 50){
               percentage = 0.2;
            } else if ( 50 > bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1
            } 
                var tip = bill * percentage;
                tips.push(tip);
                fullBillsAmounts.push(bill + tip);
        }
        this.paidTips = tips;
        this.fullBills = fullBillsAmounts;
    }
}

john.tipCalc();

console.log(john);

var mark = {
    bills: [77, 475, 110, 45],
    tipCalc: function(){
        var tips = [];
        var fullBillsAmounts = [];
        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            if(bill < 100){
               percentage = 0.2;
            } else if ( 100 > bill < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25
            } 
                var tip = bill * percentage;
                tips.push(tip);
                fullBillsAmounts.push(bill + tip);
        }
        this.paidTips = tips;
        this.fullBills = fullBillsAmounts;
    }
}

mark.tipCalc();

console.log(mark);

var calculateTipsAverage = function(tips) {
    
    var sum = 0;
    for(var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    
    return sum/tips.length;
}

john.average = calculateTipsAverage(john.paidTips);
mark.average = calculateTipsAverage(mark.paidTips);

if(john.average > mark.average) {
    console.log("John paid more tips "+ john.average +" than Mark." + mark.average);
} else if (johnAverage < markAverage) {
    console.log("Mark paid more tips "+ mark.average +" than John." + john.average);
} else {
    console.log("They paid same amount of tips. "+ mark.average);
}