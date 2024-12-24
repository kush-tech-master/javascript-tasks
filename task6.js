const prompt = require('prompt-sync')();

function fact(n){
    if(n==0){
        return 1;

    }
    else if(n==1){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}

console.log("enter a  number");
let n = prompt();
var factorial= fact(n);
console.log(factorial);