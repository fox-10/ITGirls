const form = document.querySelector("form");
const result = document.querySelector(".result");

const rose = [300, 700, 1500, 3500];
const iris = [150, 350, 750, 1750];
const tulip = [90, 210, 450, 1050];

const flowerPrices = [rose, iris, tulip];

form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let sum = 0;

    //выбор цветов
    const flowers = document.querySelector('select[name="flowers"]');
    const amount = document.querySelector('select[name="amount"]');

    const flowerArray = flowerPrices[flowers.value];
    const flowerPrice = flowerArray[amount.value];

    sum += flowerPrice;

    //выбор доставки
    const deliveryRadios = document.querySelectorAll('input[name="delivery"]');

    let radio1 = deliveryRadios[0];
    let radio2 = deliveryRadios[1];

    if (radio1.checked) {
        sum += 100;
    } else if (radio2.checked) {
        sum += 300;
    }

    //применение купона скидки
    const coupon = document.querySelector('input[name="coupon"]');
    if (coupon.value === "MYFLOWERS") {
        sum = sum * 0.8;
    }

    //вывод результата
    result.textContent = `Итого ${sum} рублей`;


})