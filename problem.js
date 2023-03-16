const Input = require("./module/Input");

 //Input((name) => {
  //console.log(`My name is ${name}`);
 //});

//write a solution to find if a number is even/odd

//Input((Number) => {
  //  if(Number%2==0) {
    //    console.log(`${Number} is even`);
    //}
    //else{
     //   console.log(`${Number} is odd`);
    //}
//});

//write a solution to find, if the number is prime number or not
Input((Number) => {
    for(let i=2; i<Number; i++){
    if(Number%i==0) {
        console.log(`${Number} is not prime`);
        break;
    }
    else{
        console.log(`${Number} is prime`);
        break;
    }};
});