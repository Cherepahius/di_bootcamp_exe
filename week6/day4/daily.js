document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const jsonData = JSON.stringify({ name: name, lastname: lastname });
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = jsonData;
});