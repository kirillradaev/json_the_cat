const request = require('request');


// conn.setEncoding('UTF8');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else if (body.length === 2) {
      callback('cant find breed', null);
    } else {
      const data = JSON.parse(body);
      callback(null, data[0]['description'].trim());
    }
  });
};

module.exports = fetchBreedDescription;