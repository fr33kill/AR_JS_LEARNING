//BOOLEAN LOGIC -  AND, OR and NOT

var firstName = 'Suganya';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a girl.')
} else if (age >= 13 && age < 20) {//Between 13 and 20 === age >=13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if(age >= 20 && age < 30) {
    console.log(firstName + ' is a young woman.');
} else {
    console.log(firstName + ' is a woman.');
}