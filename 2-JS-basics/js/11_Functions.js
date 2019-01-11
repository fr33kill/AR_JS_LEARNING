function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageSugan = calculateAge(1992);
var ageAravind = calculateAge(1987);
var ageYugan = calculateAge(2011);

console.log(ageSugan,ageAravind, ageYugan);


function yearsUntilRetirement(birthYear, firstname) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstname + ' retires in ' + retirement +' years.');
    } else {
        console.log(firstname + ' is already retired.');
 
    }
}

yearsUntilRetirement(1992, 'Suganya');
yearsUntilRetirement(1987, 'Aravind');
yearsUntilRetirement(2015, 'Raaga');