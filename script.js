document.getElementById('joke-button').addEventListener('click', fetchJoke);

function fetchJoke() {
    axios.get('https://api.chucknorris.io/jokes/random')
        .then(function (response) {
            document.getElementById('joke-container').innerHTML = response.data.value;
        })
        .catch(function (error) {
            console.error('Error fetching joke:', error);
            document.getElementById('joke-container').innerHTML = 'Failed to fetch joke!';
        });
}

// Carga inicial del chiste
fetchJoke();
