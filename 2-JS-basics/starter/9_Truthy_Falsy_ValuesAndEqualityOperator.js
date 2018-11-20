//Truthy and Falsy Values

//Falsy values: undefined, null, 0, '', NaN
//Truthy values: NOT falsy values.

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable is NOT been defined.');
}


//Equality Operators.
if (height == '23'){
    console.log('The == operator does type coercion');
} 

if (height === '23'){
    console.log('The == operator does type coercion');
} else {
    console.log('The === operator does not do type coercion');
}
