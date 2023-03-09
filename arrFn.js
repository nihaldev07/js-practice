const arr = ["a", "b", "c", "d", "e", "f"];
//console.log(arr.slice(1, -2)); // slice returns array

const fteam = "Manchester United is a football team";
//let newArr = fteam.split(" ");
//console.log(newArr); //split returns array

const vowel = ["a", "e", "i", "o", "u"];

const newArr = fteam.split(" ");
const filtered = newArr.filter(
  (item) => !vowel.includes(item[0].toLowerCase())
);
const finalString = filtered.join(" ");
console.log(
  fteam
    .split(" ")
    .filter((item) => !vowel.includes(item[0].toLowerCase()))
    .join(" ")
);

const newStr = "The way to get started is to quit talking and begin doing";

//create a string where all the word of newstr will be in reverse order

// create a string where all the word of newstr wil only have 3 char

// remove all the word with length less then 4
