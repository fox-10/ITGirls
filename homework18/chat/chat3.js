const button = document.querySelector("#submit");
const comments = document.querySelector(".phrase");
const textarea = document.querySelector("textarea");
const author = document.getElementById("author");

let array = [];




//оставляем имя автора при перезагрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    let name = localStorage.getItem("name");
    let localComments = JSON.parse(localStorage.getItem('localComments'));

    if(name){
        author.value = name;
    }

    if(localComments){
        for (let i = 0; i < localComments.length; i++) { 
            array.push(localComments[i]); 
        }
    }

    render(comments, array);
});




function checkSpam() {
    let text = textarea.value;
    textarea.value = "";

    //создаем массив из комментов
    if(text){
        array.push(text);
    }

    if(localStorage.getItem("name") == null) {
        localStorage.setItem("name", author.value)
    }
    
    //очищаем поле с ранее написанными комментами
    comments.innerHTML = "";

    //заново создаем поле  с комментами, включая новый коммент
 
    render(comments, array);
    localStorage.setItem('localComments', JSON.stringify(array));
}





function render(parentNode, data) {
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        //проверяем текст и заменяем запрещенные слова на  ***
        const words = ['viagra', 'XXX'];
        let filteredText = item;
        for (let word of words) {
            let reg = new RegExp(word, 'ig');

            filteredText = filteredText.replace(reg, "***");
        }

        //создаем див с комментом и кнопкой "удалить" в поле комментариев
        let node = document.createElement("div");
        node.classList.add("comment");
        node.textContent = filteredText;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.textContent = "X"

        deleteButton.addEventListener("click", () => {
            node.remove();
            data.splice(i, 1);
            localStorage.setItem('localComments', JSON.stringify(data));
        });

        parentNode.append(node);
        node.append(deleteButton);
    }

    
}    