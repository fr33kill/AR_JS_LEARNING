// VARIABLE MUTATION AND TYPE COERCION


//Type Coercion
var firstName = 'Suganya';
var age = 26;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'student';
isMarried = true;
console.log(firstName + ' is ' + age + ' yrs old ' + job + '. Is she married? ' + isMarried);

//Variable Mutation
age = 'twenty six';
isMarried = true;
alert(firstName + ' is ' + age + ' yrs old ' + job + '. Is she married? ' + isMarried);

var lastName = prompt('What is her last name?');
console.log(firstName + ' ' + lastName);