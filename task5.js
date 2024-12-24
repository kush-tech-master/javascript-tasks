const btn = document.querySelector("#button-1");
const step = document.querySelector("#step");
const p = document.querySelector("#show")

function fibonacci(n){
    let fibSeries = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibSeries.push(0); 
        } else if (i === 1) {
            fibSeries.push(1); 
        } else {
            fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]); 
        }
    }
    
    p.innerHTML = fibSeries.join(", ");
}
// btn.addEventListener("click",function(){
//     console.log("jsjjsjsjs");
// });



var final = step.value ;
btn.addEventListener("click", () =>{
    var final = step.value ;
    console.log(fibonacci(final));
     let pre = fibonacci(final);
    //   p.innerHTML = pre;
    
});





