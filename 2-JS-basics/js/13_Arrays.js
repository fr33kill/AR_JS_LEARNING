/* Arrays */

var names = ['Suganya', 'Aravind', 'Raaga'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

names[1] = 'Yugan';
names[names.length] = 'Mary';
console.log(names);

//Different Data types

var sugan = ['Suganya', 'Sivalingam', 1992, 'designer', 'true'];

sugan.push('blue');
sugan.unshift('Mrs.');
console.log(sugan); 

sugan.pop();
console.log(sugan);
sugan.shift();
console.log(sugan);

sugan.indexOf(1992);
console.log(sugan.indexOf(23));

var isDesigner = sugan.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer.';
console.log(isDesigner);
