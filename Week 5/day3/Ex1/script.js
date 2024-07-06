const h1 = document.querySelector('h1');
console.log(h1);

const lastParagraph = document.getElementById('last-paragraph');
lastParagraph.remove();

const h2 = document.getElementById('chocolate-heading');
h2.addEventListener('click', function () {
    h2.style.backgroundColor = 'red';
});

const h3 = document.getElementById('history-heading');
h3.addEventListener('click', function () {
    h3.style.display = 'none';
});

const button = document.getElementById('bold-button');
button.addEventListener('click', function () {
    const paragraphs = document.querySelectorAll('article p');
    paragraphs.forEach(p => {
        p.style.fontWeight = 'bold';
    });
});

const mainHeading = document.getElementById('main-heading');
mainHeading.addEventListener('mouseover', function () {
    const randomSize = Math.floor(Math.random() * 101);
    mainHeading.style.fontSize = `${randomSize}px`;
});

const secondParagraph = document.getElementById('second-paragraph');
secondParagraph.addEventListener('mouseover', function () {
    secondParagraph.classList.add('fade-out');
});