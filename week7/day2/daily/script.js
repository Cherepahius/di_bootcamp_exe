document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const form = document.getElementById('gif-form');
    const gifContainer = document.getElementById('gif-container');
    const deleteAllButton = document.getElementById('delete-all');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const category = document.getElementById('gif-category').value;
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`;

        try {
            const response = await fetch(url);
            const result = await response.json();
            const gifUrl = result.data.images.original.url;

            const gifItem = document.createElement('div');
            gifItem.className = 'gif-item';

            const gifImage = document.createElement('img');
            gifImage.src = gifUrl;
            gifItem.appendChild(gifImage);

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.innerText = 'DELETE';
            deleteButton.addEventListener('click', () => {
                gifContainer.removeChild(gifItem);
            });
            gifItem.appendChild(deleteButton);

            gifContainer.appendChild(gifItem);
        } catch (error) {
            console.error('Error fetching GIF:', error);
        }
    });

    deleteAllButton.addEventListener('click', () => {
        gifContainer.innerHTML = '';
    });
});
