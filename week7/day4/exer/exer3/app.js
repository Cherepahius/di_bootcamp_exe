
const fileManager = require('./filemanager');


fileManager.readFile('Hello World.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Read from Hello World.txt:', data);


        fileManager.writeFile('Bye World.txt', 'Writing to the file', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('Successfully wrote to Bye World.txt');
            }
        });
    }
});
