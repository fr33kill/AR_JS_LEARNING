///////////////////////////////////////
// Lecture: Hoisting

//Functions
calculateAge(1992); 

// The calculateAge function is already available through creation phase. So, can call the function before the function declaration and this will work in execution phase. This is called Hoisting.
// Point to remember is, it works only for function declarations. 

function calculateAge(year) {
    console.log(2018 - year);
}

/*
retirement(1990);
It throws Type Error because below function is not function declaration but function expression. Hoising works only for function declarations and not function expressions.

*/
var retirement = function(year) {
    console.log(65 - (2018 - year));
}

retirement(1990);


//Variables
/* Hoising happens with variables as well in a different way */

var age = 24; // this age variable is stored in GEC. So, this age is in variable object of the global execution object.

console.log(age);


console.log(age1); // This will log undefined.
var age1 = 25; 

/* In creation phase of variable object, the code is scanned for variable declarations and set to Undefined. */

function foo() {
    console.log(age);// will log undefined.
    var age = 65; // foo function as its own execution context and this age is in the variable object of this foo function eexecution object. Making it different from the age variable in GEC.
    console.log(age);
}

foo();
console.log(age);





///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/* the scoping chain - the second function has access to the variables of first function and the global scope. Thats because second function is written inside the first function which in turn is written inside of the global scope. This is called Lexical Scoping. */

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*  Global scope contains "a" variable as well as first and third functions. 
    Scope of first function contains second function.
    
    Execution stack is the order in which functions are called whereas Scope chain is the order in which the functions are written in the code where they are lexically in our code. So the order in which functions are called does not determine the scope of the variables within this functions. What determines the scope of variables is where the functions are written.
    
    Since the third function is not in the scope of the second function, it cannot access the variables "b" and "c" that are defined in first and second functions. It can only access the global variable "a" because fucntion third is written in the global scope.
*/

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c); // we dont have access to variable c because of Scope Chain.
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword


console.log(this);
// this means that "this"  keyword in the global execution context is default window object.

calculateAge(1992);
// this is a regular function call and in here, "this" keyword is always points  to window object. The object which is attached to "this" is global object. Because the object that function is attached to is global object 
function calculateAge(year) {
    console.log(2018 - year);
    console.log(this); //logs window object. 
}

var john = {
    name: 'John',
    yearOfBirth: 1992,
    calculateAge: function(){
        console.log(this); //this variable is now john object.
        console.log(2018 - this.yearOfBirth);
       
        /*
        function innerFunction(){
            console.log(this);// this variable is now window object
        }
        innerFunction(); */
    }
}

//the rule is that when a regular function code happens, then the default object is window object. Eventhough innerFunction is called inside the function expression, innerFunction is normal function declaration. So, this will have window object. 


john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1987
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

// Logs prove that "this" variable is assigned value only when the object calls the method.























