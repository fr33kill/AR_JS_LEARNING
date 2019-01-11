//Function declaration
function whatDoYouDo(job, firstName) {
    
}

//Function Expression
var whatDoYouDo = function(job, firstName) {
    
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives uber car.';
        case 'designer':
            return firstName + ' designs the app design.';
        default:
            return firstName +  ' does something else.';
    }
}

console.log(whatDoYouDo('teacher','Suganya'));
console.log(whatDoYouDo('designer','Aravind'));console.log(whatDoYouDo('retired','Raaga'));