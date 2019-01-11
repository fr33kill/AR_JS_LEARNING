//CODING CHALLENGE 1 

var massMark, massJohn, heightMark, heightJohn, bmiJohn, bmiMark;

massMark = prompt('Mass of Mark (in kgs) ?');
heightMark = prompt('Height of Mark (in meters) ?');
bmiMark = massMark/(heightMark * heightMark);
console.log('BMI of Mark - ' + bmiMark);

massJohn = prompt('Mass of John (in kgs) ?');
heightJohn = prompt('Height of John (in meters) ?');
bmiJohn = massJohn/(heightJohn * heightJohn);
console.log('BMI of John - ' + bmiJohn);

var higherBMIMark = bmiMark > bmiJohn;
console.log('Is Mark BMI higher than John\'s? - '+ higherBMIMark);