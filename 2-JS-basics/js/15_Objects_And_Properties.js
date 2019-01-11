// Objects and properties

var sugan = {
    firstName: 'Suganya',
    lastName: 'Sivalingam',
    birthYear: 1992,
    family: ['Aravind', 'Giri', 'Yugan', 'Raaga'],
    job: 'home maker',
    isMarried: true
}

console.log(sugan.family );
console.log(sugan['job'] );
var x = 'birthYear';
console.log(sugan[x]);

sugan.job = 'trying job';
sugan['isMarried'] = false;
console.log(sugan);

//Initialising new object

var aravind = new Object();
aravind.name = 'Aravind';
aravind.birthYear = 1987;
aravind['lastName'] = 'Vijayakumar';
console.log(aravind);