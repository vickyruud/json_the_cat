const request = require("request");

let catApi = 'https://api.thecatapi.com/v1/breeds/search'

request(catApi, (error,status,body) => {
  if(!error){
    console.log(body);
  }
})
