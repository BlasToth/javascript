const btn = document.getElementById('btn');

const randomBgChanger = function () {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

btn.addEventListener('click', function() {
    document.body.style.background = randomBgChanger();
});

// const nyom = function() {
//     document.body.style.background = randomBgChanger();
// }

// btn.addEventListener('click', setInterval(nyom, 1000));