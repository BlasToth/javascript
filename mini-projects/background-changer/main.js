const btn = document.getElementById('btn');

function randomBgChanger() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

btn.addEventListener('click', function() {
    document.body.style.background = randomBgChanger();
});