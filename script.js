document.getElementById('joke-button').addEventListener('click', fetchJoke);

async function fetchJoke() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        const joke = response.data.value;
        document.getElementById('joke-container').innerHTML = joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('joke-container').innerHTML = 'Failed to fetch joke!';
    }
}

// Carga inicial del chiste
fetchJoke();

