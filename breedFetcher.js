const request = require('request');
//console.log(breed);
//const args = process.argv.splice(2);
//const breedName = args[0];

const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    //console.log(typeof body);
    //console.log(breed)
    if(error) {
      callback(error, null);
      //console.error(data[0].description); // Print the error if one occurred
    return;
  } const data = JSON.parse(body);

  // If request did not return an error AND breedName is an invalid breed
    if (data.length === 0) {
    callback(`Search query for '${breedName}' not found!`, null);

    return;
  }

  // If request did not return an error and breedName is a valid breed
     callback(null, data[0].description);
    //console.log(data);
    //console.log(typeof data);
    ///console.log('error:', null);
  
  
});

};

module.exports = { fetchBreedDescription };