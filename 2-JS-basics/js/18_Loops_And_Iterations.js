// For Loop

for (var i = 0; i < 10; i++){
    console.log(i);
}

//How it works -
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// i = 2, 2 < 10 true, log i to console, i++
//...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 false, exit the loop!!

var sugan = ['Suganya', 'Sivalingam', 1992, 'homemaker', true];

//for loop
for(var i = 0; i < sugan.length; i++){
    console.log(sugan[i]);
}

//while loop
var n = 0;
while(n < sugan.length){
    console.log(sugan[n]);
    n++;
}

//continue and break statements
for(var i = 0; i < sugan.length; i++){
    if(typeof sugan[i] !== 'string') continue;
    console.log(sugan[i]);
}

for(var i = 0; i < sugan.length; i++){
    if(typeof sugan[i] !== 'string') break;
    console.log(sugan[i]);
}

//looping backwards.
for(var i = sugan.length - 1; i >= 0; i--) {
    console.log(sugan[i]);
}