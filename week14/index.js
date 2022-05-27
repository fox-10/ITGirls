console.log((function(a,b) {
  return a+b;
})(5,9));



function test(x) {
x();
}

test(function() {
    console.log('Привет!');
})





/*function sum1(a,b){
    return a+b
}

var result=sum1(2,3);

console.log(result);

let sum2=function(a,b) {
    return a+b
};*/

let sum3=(a,b)=>a+b;
let result=sum3(5,10);

console.log(result);



function test(func) {
    func();
}

test (function() {
    console.log('Привет!');
});

let y=x=>x**2;
console.log(y(4));

let showMessage2=()=>{
    let name=prompt('Как тебя зовут?');
    console.log(`Привет, ${name}!`);}
showMessage2();


console.log(sum4(4,9));
function sum4(c,d) {return c+d;}
    


    let sum5=function(g,h) {
    return g+h};
    console.log(sum5(8,9));