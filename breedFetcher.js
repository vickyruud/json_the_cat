const request = require("request");

let breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, status, body) => {
  if (error) {
    console.log("Error: ", error);
    return;
  } else {
    let data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Not a valid breed!");
      return;
    }
    let breed = data[0]["description"];
    console.log(breed);
  }
});

