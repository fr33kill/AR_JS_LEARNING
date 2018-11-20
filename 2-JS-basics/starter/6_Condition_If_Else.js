// IF ELSE Statements. - Conditional Statements

var FirstName = 'Suganya';
var civilStatus = 'married';

if(civilStatus === 'single') {
    console.log(FirstName + ' is single.');
} else {
    console.log(FirstName + ' is married already to Aravind.');
}

var isMarried = true;
if(isMarried) {
    console.log(FirstName + ' is single.');
} else {
    console.log(FirstName + ' is married already to Aravind.');
}

var massMark, massJohn, heightMark, heightJohn, bmiJohn, bmiMark;

massMark = 78;
heightMark = 1.69;
bmiMark = massMark/(heightMark * heightMark);
console.log('BMI of Mark - ' + bmiMark);

massJohn = 110;
heightJohn = 1.95;
bmiJohn = massJohn/(heightJohn * heightJohn);
console.log('BMI of John - ' + bmiJohn);

if(bmiMark > bmiJohn) {
    console.log('Mark\'s BMI higher than John\'s.');
} else {
    console.log('John\'s BMI higher than Mark\'s.');
}