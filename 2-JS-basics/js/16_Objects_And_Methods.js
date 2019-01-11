// Lets say if we wanted to calculate age of sugan, birth year is constant.
var sugan = {
    firstName: 'Suganya',
    lastName: 'Sivalingam',
    birthYear: 1992,
    family: ['Aravind', 'Giri', 'Yugan', 'Raaga'],
    job: 'home maker',
    isMarried: true,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
};

// sugan.age = sugan.calcAge(); if setting it separately.

sugan.calcAge();
console.log(sugan);

