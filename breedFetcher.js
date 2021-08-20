const request = require("request");

const url = `https://api.thecatapi.com/v1/breeds/search?q=siberian`;
request(url, (error, status, body) => {
  let data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
})



