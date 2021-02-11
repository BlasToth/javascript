const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);

async function generateJoke() {
    // call the API
    const jokeRes = await fetch('https://icanhazdadjoke.com/');
}