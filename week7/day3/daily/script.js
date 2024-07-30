document.getElementById('fetch-button').addEventListener('click', fetchCharacter);

function fetchCharacter() {
    const loading = document.getElementById('loading');
    const characterInfo = document.getElementById('character-info');


    loading.style.display = 'block';
    characterInfo.innerHTML = '';


    const randomId = Math.floor(Math.random() * 83) + 1;

    fetch(`https://www.swapi.tech/api/people/${randomId}`)
        .then(response => response.json())
        .then(data => {
            loading.style.display = 'none';


            const character = data.result;
            const infoHtml = `
                <h2>${character.properties.name}</h2>
                <p><strong>Height:</strong> ${character.properties.height} cm</p>
                <p><strong>Gender:</strong> ${character.properties.gender}</p>
                <p><strong>Birth Year:</strong> ${character.properties.birth_year}</p>
                <p><strong>Homeworld:</strong> ${character.properties.homeworld}</p>
            `;
            characterInfo.innerHTML = infoHtml;
        })
        .catch(error => {

            loading.style.display = 'none';
            characterInfo.innerHTML = '<p>Error fetching data. Please try again.</p>';
        });
}
