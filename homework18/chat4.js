const button = document.querySelector('button');
const comments = document.querySelector('.comments');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const array = [];

// изъятие данных из localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('userNickname') !== null) {
    input.value = localStorage.getItem('userNickname');
    }

    if (localStorage.getItem('userComments') !== null) {
        const previousComments = JSON.parse(localStorage.getItem('userComments'));

    for (let i = 0; i < previousComments.length; i++) { 
        array.push(previousComments[i]); 
    } } 

    render(comments, array); 
});



    button.addEventListener('click', ()=> {
        const userName = input.value;
        const text = textarea.value;

    // сохранение имени пользователя
        if (localStorage.getItem('userNickname') === null) {
        localStorage.setItem('userNickname', userName);
        }

        if (text !== '') {
            array.push(text);
        }

    // сохранение комментариев пользователя
        const localComments = JSON.stringify(array);
        localStorage.setItem('userComments', localComments);

        textarea.value = '';
        comments.innerHTML = '';

        render(comments, array);
    });



    // фукнция добавления комментариев
    function render(parentNode, data) {
        for (let i = 0; i < data.length; i++) { 
            let item=data[i]; 
            const filteredWords=['viagra', 'xxx' ]; 
            let filteredText=item; 

            for (let word of filteredWords) { 
                let regexp=new RegExp(word, 'ig' );
                filteredText=filteredText.replace(regexp, '***' ); 
            } 
            let node=document.createElement('div');
            node.classList.add('comment'); 
            node.textContent=filteredText; 
            parentNode.append(node); 
        } }