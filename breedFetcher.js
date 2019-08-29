const request = require('request');
const readline = require('readline');
const fs = require('fs');
let command = process.argv.slice(2);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// conn.setEncoding('UTF8');


const breed = 'https://api.thecatapi.com/v1/breeds/search?q=';

request(breed+command[0], (error, response, body) => {
 if(error){
    console.log('Something went wrong:\n', error);
    process.exit();
  } else if(body.length === 2) {
    console.log('The breed was not found :(')
    process.exit();
  } else {
    const data = JSON.parse(body);
    console.log(typeof data);
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', data[0]['weight']); 
    process.exit();
  }
});

