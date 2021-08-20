const fetchBreedDescription = require("../breedFetcher");
const { assert } = require("chai");

describe('fetchBreedDescription', () => {
  it('Returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      //we expect no errors in this scenario hence err should equal null
      assert.equal(err,null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());
      done();

    });
  });
  it('Returns an error when an invalid breed is passed via callback', (done) => {
    fetchBreedDescription('test', (err,desc) => {
      assert.exists(err);
      assert.equal(undefined, desc);
      done();
    });
  });
});
