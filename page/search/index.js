const arr = [
  "United kingdom",
  "USA",
  "Saudia Arabia",
  "Bangladesh",
  "Japan",
  "Korea",
  "Indonesia",
  "Nepal",
  "Bhutan",
  "China",
  "Russia",
  "Afganistan",
  "Turkey",
  "South Africa",
];
const searchEngine = (keyword) => {
 
  for(i=0; i<arr.length; i++){
    if(arr[i]== keyword){
    let result = arr[i];
      return result ;
  }
}
}

