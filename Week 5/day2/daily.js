
const solarSystem = [
    { name: 'Mercury', moons: [], color: 'gray' },
    { name: 'Venus', moons: [], color: 'yellow' },
    { name: 'Earth', moons: ['Moon'], color: 'blue' },
    { name: 'Mars', moons: ['Phobos'], color: 'red' },
    { name: 'Jupiter', moons: ['Io'], color: 'orange' },
    { name: 'Saturn', moons: ['Titan'], color: 'gold' },
    { name: 'Uranus', moons: ['Miranda'], color: 'lightblue' },
    { name: 'Neptune', moons: ['Triton'], color: 'darkblue' }
];


const section = document.querySelector('.listPlanets');


function createSolarSystem() {
    solarSystem.forEach(planet => {

        const planetDiv = document.createElement('div');
        planetDiv.classList.add('planet');
        planetDiv.classList.add(planet.name.toLowerCase());
        planetDiv.style.backgroundColor = planet.color;


        planetDiv.innerText = planet.name;


        planet.moons.forEach((moon, index) => {
            const moonDiv = document.createElement('div');
            moonDiv.classList.add('moon');

            moonDiv.style.left = "200px + index * 50px";
            moonDiv.style.top = '50%';
            moonDiv.innerText = moon;

            planetDiv.appendChild(moonDiv);
        });


        section.appendChild(planetDiv);
    });
}


createSolarSystem();
