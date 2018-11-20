//OPERATOR PRECEDENCE
var now = 2018;
var yearSugan = 1992;
var fullAge = 20;

var isFullAge = now - yearSugan >= fullAge;
console.log(isFullAge);

var ageSugan = now - yearSugan;
var ageAravind = 31;
var average = (ageSugan + ageAravind) / 2;
console.log(average);

//Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6;// 8 * 4 - 6 //32 - 6 //26
console.log(x,y);

// More operators
x = x * 2; // both are same.
console.log(x);
x *= 2;
console.log(x);
x += 10;
console.log(x);

x = x + 1;
console.log(x);
x += 1;
console.log(x);
x ++;
console.log(x);


