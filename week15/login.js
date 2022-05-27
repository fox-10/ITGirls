function check() {
    let email=document.getElementById("exampleInputEmail1");
    let password=document.getElementById("exampleInputPassword1");

document.getElementById("errorMessage").innerHTML="";

    if(email.value=='') {
    document.getElementById("errorMessage").innerHTML+="Ваш емейл незаполнен<br>";}

    if(password.value=='') {
    document.getElementById("errorMessage").innerHTML+="Ваш пароль незаполнен<br>";}

    if(password.value.length<=5) {
        document.getElementById("errorMessage").innerHTML+="Ваш пароль слишком короткий<br>";}
}