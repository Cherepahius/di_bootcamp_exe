const form = document.getElementById('libform');
const storyElement = document.getElementById('story');
const shuffleButton = document.getElementById('shuffle-button');

let stories = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const noun = document.getElementById('noun').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    if (!noun || !adjective || !person || !verb || !place) {
        alert('Please fill in all the fields.');
        return;
    }

    const story = `Once upon a time in ${place}, there was a ${adjective} ${noun} named ${person}. Every day, ${person} would ${verb} all over the place, making everyone smile.`;
    stories = [
        story,
        `In the ${place}, a ${adjective} ${noun} was found by ${person} who decided to ${verb} it until it became famous.`,
        `${person} went to ${place} with a ${adjective} ${noun}. Together they decided to ${verb} and had a great time.`,
        `Have you heard about the ${adjective} ${noun} from ${place}? ${person} saw it and decided to ${verb} immediately!`
    ];

    storyElement.textContent = story;
});

shuffleButton.addEventListener('click', function () {
    if (stories.length === 0) {
        alert('Please generate a story first.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * stories.length);
    storyElement.textContent = stories[randomIndex];
})