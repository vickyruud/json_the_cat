const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, status, body) => {
    if (error) {
      return callback(`Failed to retrive breed details. ${error}`, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback("Not a valid breed!" , null);
    }
    let description = data[0]["description"];
    callback(null,description);
    
  });
};

module.exports = fetchBreedDescription;