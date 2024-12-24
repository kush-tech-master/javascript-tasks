
const prompt = require('prompt-sync')();

function sumOfString(str1){
    let finalSum = 0;

    const arr =  Array.from(str1);
   for (i=0;i<=arr.length;i++) {
    if (arr[i]>='0' && arr[i]<='9'){
        let s = Number(arr[i]);
       finalSum = finalSum + s;
        
    }
        
    }
    console.log((finalSum));
}


console.log("enter a string with number");
let str = prompt();
var sum = sumOfString(str);
