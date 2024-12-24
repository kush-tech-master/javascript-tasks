const prompt = require('prompt-sync')();

function sum(str1){
    let finalSum = 0 ;
    let kush= 0;
    const arr =  str1.split(',');
    const len = arr.length;
    
   for (var n of arr) {
    
        finalSum += parseFloat(n) ;
    }

    console.log(finalSum);
}


console.log("enter a stringof number");
let str = prompt();
var sum = sum(str);
// console.log("sum is ",sum);