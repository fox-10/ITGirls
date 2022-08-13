function s(){
    let a= parseInt(document.getElementById("sum1").value);
    let b= parseInt(document.getElementById("sum2").value);
    let c=a+b;
    alert(`сумма равна ${c}`);
    //document.getElementById("sum").innerHTML=c;
}

function c(){
    let a= parseInt(document.getElementById("sum1").value);
    let b= parseInt(document.getElementById("sum2").value);
    let c=a-b;
    document.getElementById("sub").innerHTML=c;}

function d(){
    let a= parseInt(document.getElementById("sum1").value);
    let b= parseInt(document.getElementById("sum2").value);
    let c=a/b;
    document.getElementById("div").innerHTML=c;}

function m(){
    let a= parseInt(document.getElementById("sum1").value);
    let b= parseInt(document.getElementById("sum2").value);
    let c=a*b;
    document.getElementById("mul").innerHTML=c;}