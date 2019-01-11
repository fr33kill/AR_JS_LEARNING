var mark = {
    fullName: "Mark Mandayan",
    mass: 85,
    height: 1.86,
    calcBMI: function(){
        this.BMI = Math.round(this.mass/(this.height*this.height));
        return this.BMI;
    }
};

var john = {
    fullName: "John Josiyar",
    mass: 65,
    height: 1.2,
    calcBMI: function(){
        this.BMI = Math.round(this.mass/(this.height*this.height));
        return this.BMI;
    }
};

var johnBMI = john.calcBMI();
var markBMI = mark.calcBMI();

if(johnBMI > markBMI) {
    console.log(john.fullName + " has got " + johnBMI + " which is higher than " + mark.fullName + "'s " + markBMI);
} else if(mark < johnBMI) {
    console.log(mark.fullName + " has got " + markBMI + " which is higher than " + john.fullName + "'s " + johnBMI);
} else {
    console.log(john.fullName + " and " + mark.fullName + " have same BMI of "+ markBMI);
}

console.log("Mark ->" + mark);
console.log("John ->" + john);