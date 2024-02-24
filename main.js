let count = 0;
let button = document.getElementById("click-me");
let counter = document.getElementById("counter");
let body = document.querySelector(`body`);

button.addEventListener(`click`, function () {
    count++;

    if (count % 10 == 0) {
        counter.style.color = 'red';
        counter.style.fontSize = 32 + 'px';
    } else {
        counter.style.color = '#fff';
        counter.style.fontSize = 20 + 'px';
    }

    if (count % 50 == 0) {
        body.style.background = 'linear-gradient(rgb(11, 63, 68), rgb(6, 17, 36))';
    } else {
        body.style.background = 'linear-gradient(rgb(6, 17, 36), rgb(11, 63, 68))';
    }

    counter.innerHTML = count;
    saveToLocalStorage();
})

function saveToLocalStorage() {
    localStorage.setItem('count', JSON.stringify(count));
}

window.addEventListener('load', () => {
    count = localStorage.getItem('count');
    counter.innerHTML = count;

    if (count % 10 == 0) {
        counter.style.color = 'red';
        counter.style.fontSize = 32 + 'px';
    } else {
        counter.style.color = '#fff';
        counter.style.fontSize = 20 + 'px';
    }

    if (count % 50 == 0) {
        body.style.background = 'linear-gradient(rgb(11, 63, 68), rgb(6, 17, 36))';
    } else {
        body.style.background = 'linear-gradient(rgb(6, 17, 36), rgb(11, 63, 68))';
    }
})

document.addEventListener(`keydown`, function (evt) {
    if (evt.key == "Enter" || evt.key == " ") {
        evt.preventDefault();
    }
})