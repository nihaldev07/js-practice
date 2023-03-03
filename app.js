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

//slice

//sort

//foreach

//indexof

//includes (try it but we will discuss it later)

//reduce (try it but we will discuss it later)

//join (we will discuss it in string topic)
