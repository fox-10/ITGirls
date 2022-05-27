function select(sender) {
    sender.classList.add('selected')
}

function sum(a,b) {
    let result=a+b;
    return result;
}

let h1=document.getElementsByTagName("h1");

console.log(sum(35,"67"));