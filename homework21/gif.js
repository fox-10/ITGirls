let button = document.getElementById("button");
let input = document.getElementById("input");
let amount = document.getElementById("amount");
let gifsArray = document.getElementById("gifsArray");


button.addEventListener("click", function() {  

    let searchGif = input.value;
    let amountValue = amount.value;
    gifsArray.innerHTML = "";

    fetch("https://api.giphy.com/v1/gifs/search?api_key=rFaqbIXeME4c5vH8t5DA9wVPMyGWVBqI&q="+searchGif+"&limit="+amountValue+"&offset=0&rating=g&lang=en")
        .then(response => response.json())
        .then(gifs => {
        console.log(gifs);

        for(i=0; i < amountValue; i++) {

            let img = document.createElement("img");
            img.src = gifs.data[i].images.original.url;
            
            gifsArray.append(img);
        }  

        })
        .catch(error => console.log(error));
})


