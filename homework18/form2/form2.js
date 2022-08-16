let errors = [];

function validName() {
    let nameField = document.getElementById("name");
    let nameFormat = /^[А-ЯЁ|A-Z][а-яё|a-z]*$/;
    console.log(nameField.value);
    if (nameField.value.match(nameFormat)) {
        return true;
    } else {
        errors.push("Имя должно начинаться с большой буквы");
    }
}

function validLastName() {
    let lastNameField = document.getElementById("lastName");
    let nameFormat = /^[А-ЯЁ|A-Z][а-яё|a-z]*$/;
    if (lastNameField.value.match(nameFormat)) {
        return true;
    } else {
        errors.push("Фамилия должна начинаться с большой буквы");
    }
}

function validLogin() {
    let loginField = document.getElementById("login");
    let loginFormat = /^[а-яё|a-z|0-9]+$/i;
    if (loginField.value.match(loginFormat)) {
        return true;
    } else {
        errors.push("Логин может содержать только буквы и цифры");
    }
}

function validPassword() {
    let passwordField = document.getElementById("password");
    let passwordFormat = /^[а-яё|a-z|0-9]{6,}$/i;
    if (passwordField.value.match(passwordFormat)) {
        return true;
    } else {
        errors.push("Пароль должен содержать не менее 6 символов, включая буквы или цифры");
    }
}

function validPassword2() {
    let passwordField = document.getElementById("password");
    let password2Field = document.getElementById("password2");
    if (passwordField.value == password2Field.value) {
        return true;
    } else {
        errors.push("Пароли должны совпадать");
    }
}

function validPhone() {
    let phoneField = document.getElementById("phone");
    let phoneFormat = /^8[0-9]{10}$/;
    if (phoneField.value.match(phoneFormat)) {
        return true;
    } else {
        errors.push("Номер телефона должен содержать 11 цифр, первая цифра 8");
    }
}

function validCheckbox() {
    let checkboxField = document.getElementById("checkbox1");
    if (checkboxField.checked) {
        return true;
    } else {
        errors.push("Вы не приняли пользовательское соглашение");
    }
}

function check() {
    let nameField = document.getElementById("name");
    errors = [];

    validName();
    validLastName();
    validLogin();
    validPassword();
    validPassword2();
    validPhone();
    validCheckbox();

    document.getElementById("errorMessage").innerHTML = errors.join('<br>');
    if (errors.length == 0) {
        document.getElementById("congrat").innerHTML = `Добро пожаловать, ${nameField.value}!<br><br>`;
    }
}