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
/*console.log(
  fteam
    .split(" ")
    .filter((item) => !vowel.includes(item[0].toLowerCase()))
    .join(" ")
); */

const newStr = "The way to get started is to quit talking and begin doing";

//create a string where all the word of newstr will be in reverse order

const str = newStr.split(" ");

// create a string where all the word of newstr will only have 3 char

// console.log(
//   str.map((itm) => {
//     if (itm.length > 3) return itm.slice(0, 3);
//     else return itm;
//   })
// );

//example of ternary(?) operator
//console.log(str.map((itm) => (itm.length > 3 ? itm.slice(0, 3) : itm)));

// remove all the word with length less then 4
//console.log(str.filter((itm) => itm.length >= 4).join(" "));
