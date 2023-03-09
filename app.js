//js array
const arr = [1, 2, 3, 4, 5, 6, 7];

// filter
let fn = (element) => element > 3;
console.log(arr.filter(fn)); // filter returns array

//map
let mapFn = (element) => "c" + element;
console.log(arr.map(mapFn)); // map new modified array return but it doesn't modify the parent or original array

//every
let everyFn = (element) => element % 2 == 0;
console.log(arr.every(everyFn)); // every return boolean value

//some
let someFn = (element) => element % 2 == 0;
console.log(arr.some(someFn)); // some return boolean value

//split
//let splitarr = arr.split('',2);
//console.log(splitarr);

//slice
let sliceFn =(element)=> element;
console.log(arr.slice(sliceFn,2));

//sort

console.log(arr.sort(function(a,b){return(b-a)}));

//foreach
arr.forEach(arr => console.log(arr));

//indexof
console.log(arr.indexOf(3));

//includes (try it but we will discuss it later)
console.log(arr.includes(2));

//reduce (try it but we will discuss it later)
let joinarr = (accumulator, currentvalue) => accumulator+ currentvalue;
console.log(arr.reduce(joinarr));

//join (we will discuss it in string topic)
let join = arr.join("+");
console.log(join);

//stack in array 1
let num = [];
let digit = num.push(4, 2);
console.log(digit);
console.log(num);

