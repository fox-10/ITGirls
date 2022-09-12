let input = document.getElementById("searchGif");
let amountValueamount = document.getElementById("amount");

console.log(input);

input.addEventListener("input", function() {
    console.log("hi");
    let searchGif = input.value;
    let amountValue = amount.value;

    fetch("https://api.giphy.com/v1/gifs/search?api_key=rFaqbIXeME4c5vH8t5DA9wVPMyGWVBqI&q="+searchGif+"&limit="+amountValue+"&offset=0&rating=g&lang=en")
    .then(response => response.json())
    .then(gifs => {
        document.getElementById("gifs0").src = gifs.data[0].images.original.url;
        document.getElementById("gifs1").src = gifs.data[1].images.original.url;
        document.getElementById("gifs2").src = gifs.data[2].images.original.url;
        document.getElementById("gifs3").src = gifs.data[3].images.original.url;
        document.getElementById("gifs4").src = gifs.data[4].images.original.url;
    })
    .catch(error => console.log(error));
})


