//const apiURL = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
//async function getGifs() {
//    try {
//        let response = await fetch(apiURL);

//        if (!response.ok) {
//            throw Error("HTTP error " + response.statusText);
//        }

//       let data = await response.json();
//        console.log(data);
//    } catch (error) {
//        console.log('Error: ' + error);
//    }
//}




//Exer.2

//const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
//const query = 'sun';
//const limit = 10;
//const offset = 2;

//const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}`;

//fetch(url)
//    .then(response => {
//        if (!response.ok) {
//            throw new Error(`HTTP error! Status: ${response.status}`);
//        }
//        return response.json();
//    })
//    .then(data => {
//        console.log(data);
//    })
//    .catch(error => {
//        console.error('Fetch error:', error);
//    });



//Exer.3

//async function fetchStarship() {
//    try {
//        const response = await fetch("https://www.swapi.tech/api/starships/9/");

//       if (!response.ok) {
//            throw new Error(`HTTP error! Status: ${response.status}`);
//        }

//        const objectStarWars = await response.json();
//        console.log(objectStarWars.result);
//    } catch (error) {
//        console.error("Error fetching starship data:", error);
//    }
//}
//fetchStarship();

//Exer.4

//function resolveAfter2Seconds() {
//    return new Promise(resolve => {
//        setTimeout(() => {
//            resolve('resolved');
//        }, 2000);
//    });
//}

//async function asyncCall() {
//    console.log('calling');
//    let result = await resolveAfter2Seconds();
//    console.log(result);
//}

//asyncCall();

//This function will log "calling" before the promise resolves, and "resolved" after it does.

