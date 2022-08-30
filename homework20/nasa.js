async function loadData() {
    let response = await fetch("https://api.nasa.gov/planetary/apod?api_key=sjPMs73VCbGaU3NuWTigvFTLQPJTPMemQFHlUoAg");
    let data = await response.json();
    console.log(data);

    let resultNode = document.createElement('div');
    let titleNode = document.createElement('h1');
    let imgNode = document.createElement('img');
    let textNode = document.createElement('p');

    if(data == "")  {
        textNode.textContent = "Сервер недоступен";
    } else {
        titleNode.textContent = data.title;
    imgNode.src = data.url;
    imgNode.width = 1200;    
    textNode.textContent = data.explanation;
    }


    document.body.append(resultNode);
    resultNode.append(titleNode);
    resultNode.append(imgNode);
    resultNode.append(textNode);
}


loadData();
loadData().catch((e) => {if(e){
    let resultNode = document.createElement('div');
    let textNode = document.createElement('p');

    document.body.append(resultNode);
    resultNode.append(textNode);
    textNode.textContent = `Ошибка! Тип ошибки: ${e}`;}});
