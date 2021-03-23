//using unix commands with git-bash run a fun practice using npm installs, requires and other node.js functions
//to run use unix git-bash command 'node index.js'

const figlet = require('figlet');// after npm installing figlet require figlet to render fun font.
const colors = require('colors');// after npm installing colors require colors to render fun color effects.
figlet('Hello World!!', function (err, data) { //call figlet (string you want converted,function( Error, returned date)
    if (err) { // if no data is returned then handle with an error message in unix shell (git-bash) and send error data
        console.log('Something went wrong...');
        console.dir(err);
        return;// return error data
    }
    console.log(data.blue) // if no error then log the returned data to terminal- .blue is colors method making word blue
});