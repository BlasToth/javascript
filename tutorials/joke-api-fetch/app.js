const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');
console.log(jokeEl)

get_joke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    // call the API
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    // set the new joke
    const joke = await jokeRes.json();

    console.log(joke);
}