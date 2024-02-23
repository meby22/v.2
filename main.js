let count = 0;
let button = document.getElementById("click-me");
let counter = document.getElementById("counter");

let body = document.querySelector(`body`);

button.addEventListener(`click`, function () {
    count++;
    if (count % 10 == 0) {
        counter.style.color = '#123';
        counter.style.fontSize = 32 + 'px';
    } else {
        counter.style.color = '#fff';
        counter.style.fontSize = 20 + 'px';
    }
    if (count % 50 == 0) {
        body.style.background = 'blue';
    } else {
        body.style.background = 'linear-gradient(rgb(6, 17, 36), rgb(11, 63, 68))';
    }
    counter.innerHTML = count;
})
