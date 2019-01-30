// Function Constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//This is JS pattern for writing a blueprint. It implies that we are going to create a function. Always start with Capital letter for function constructor.

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


//This is how we create new objects with function constructor. And this is called instantiation because this jane is instance of a Person object.
//When we use a new keyword here, it creates an empty object. The the constructor function in this case Person is called with the arguments that we specified. It creates a new Execution Context and this variable pointing to new empty object and not to the global object.

var jane = new Person('Jane', 1992, 'teacher');
var mark = new Person('Mark', 1987, 'developer');
var phil = new Person('Phil', 1960, 'retired');

// CalculateAge function is not actually in the function constructor but its in the prototype property of function constructor. This is inheritance in practice.
Person.prototype.calculateAge = function(){
        console.log(2018 - this.yearOfBirth);
    };

jane.calculateAge();
mark.calculateAge();
phil.calculateAge();

//We can do with the properties as well like functions but it is uncommon.
Person.prototype.lastName = 'Smith';

//This property is not directly in the object but we have access to it because it is in the prototype property of function constructor.
console.log(jane.lastName);
console.log(mark.lastName);
console.log(phil.lastName);
