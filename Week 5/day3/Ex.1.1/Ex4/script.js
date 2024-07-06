document.getElementById('MyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let radius = document.getElementById('radius').value;
    let volume = calculateVolume(radius);

    document.getElementById('volume').value = volume;
});

function calculateVolume(radius) {
    if (radius === '' || isNaN(radius) || radius <= 0) {
        return 'Invalid radius';
    }

    radius = parseFloat(radius);
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    return volume.toFixed(2);
}