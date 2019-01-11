//Ternary operator (Conditional statement) 
// if else in one line

var firstName = 'Suganya';
var age = 26;

age >= 18 ? console.log(firstName + ' can drink alcohol.') : console.log(firstName + ' cannot drink alcohol');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

//Switch Statement (Multiple if else statements)
var job = 'instructor';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives his car around Chennai.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' is smart person.');

}

var firstName = 'Suganya';
var age = 20;

switch(true) {
    case age < 13:
        console.log(firstName + ' is a girl.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young woman.');
        break;
    default:
        console.log(firstName + ' is a woman.');
        break;


}