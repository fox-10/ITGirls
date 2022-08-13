const button = document.querySelector("button");
const comments = document.querySelector(".phrase");
const textarea = document.querySelector("textarea");
let array = [];

//оставляем имя автора при перезагрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    let name = localStorage.getItem("name");
    if(name){

    }
})

function checkSpam() {
    let text = textarea.value;
    textarea.value = "";

    //создаем массив из комментов
    if(text){
        array.push(text);
    }
    
    //очищаем поле с ранее написанными комментами
    comments.innerHTML = "";

    //заново создаем поле  с комментами, включая новый коммент
    render(comments, array)
};


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
        deleteButton.textContent = "X"

        deleteButton.addEventListener("click", () => {
            node.remove();
            data.splice(i, 1);
        });

        parentNode.append(node);
        node.append(deleteButton);
    }
}    


/*
function checkSpam() {
    let inputPhrase = (document.getElementById("textarea")).value;

    let outputPhrase = inputPhrase.replace(/XXX/gi, "***").replace(/viagra/gi, "***");
    document.getElementById("phrase1").innerHTML += outputPhrase + "<br><br>";
    document.getElementById("textarea").value = "";

}
*/