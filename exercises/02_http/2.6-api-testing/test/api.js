// See https://www.npmjs.com/package/chai
const chai = require("chai");
// See https://www.npmjs.com/package/chai-http
const chaiHttp = require("chai-http");
// Your server implementation
const server = require("../index.js");
// Using 'should' style, see: https://www.chaijs.com/guide/styles/#should
const should = chai.should();
const fs = require("fs");

// Read the files that the server responses should be equal to
const index = fs.readFileSync("index.html").toString();
const homer = fs.readFileSync("homer.html").toString();
const bradbury = fs.readFileSync("bradbury.html").toString();

// Tell Chai to use the chai-http middleware (or plugin in Chai's own vocabulary)
chai.use(chaiHttp);

describe("Going through the routes", () => {
  /*
   * Test GET random route, should receive an empty 404 response
   */
  describe("GET random path", () => {
    // TODO modify the it statement to use the function that has been
    // commented out below.
    // You also need to uncomment the needed parts.
    // As the result the status of the test should go from 'pending' to 'passing'
    // Even thou just leaving the function inside <em>end</em> method will pass,
    //  you must write the tests as described in the TODO inside the end method.
    it("it should receive a 404 response", (done) => {
      chai
        .request(server)
        .get("/just_an_example_random_path_to_get_a_404")
        .end((err, res) => {
          // TODO: using the should style check that
          // a) the response's HTTP response status is 404, and
          // b) that the response body is empty

          res.should.have.status(404);
          // res.statusCode.should.equal(404);
          res.text.length.should.be.eql(0);
          done();
        });
    });
  });

  /*
   * Test the / route, should receive index.html
   */
  describe("GET / path", () => {
    // TODO modify the it statement to use the function that has been
    // commented out below.
    // You also need to uncomment the needed parts.
    // As the result the status of the test should go from 'pending' to 'passing'
    // Even thou just leaving the function inside <em>end</em> method will pass,
    //  you must write the tests as described in the TODO inside the end method.
    it("it should GET the index.html", (done) => {
      // TODO uncomment the needed parts
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          // TODO: using the should style check that
          // a) the response's HTTP response status is
          // b) that the response is in HTML form
          // c) the text of the response is equal to index.html
          res.should.have.status(200);
          //res.statusCode.should.equal(200);
          //res.body.should.be.a("text/html");
          res.should.be.html;
          res.text.should.be.eql(index);
          done();
        });
    });
  });

  /*
   * Test the /classical route, should receive homer.html
   */
  describe("GET /classical path", () => {
    // TODO modify the it statement to use the function that has been
    // commented out below.
    // You also need to uncomment the needed parts.
    // As the result the status of the test should go from 'pending' to 'passing'
    // Even thou just leaving the function inside <em>end</em> method will pass,
    //  you must write the tests as described in the TODO inside the end method.
    it("it should GET the homer.html", (done) => {
      // TODO uncomment the needed parts
      chai
        .request(server)
        .get("/classical")
        .end((err, res) => {
          // TODO: using the should style check that
          // a) the response's HTTP response status is
          // b) that the response is in HTML form
          // c) the text of the response is equal to homer.html
          res.should.have.status(200);
          res.should.be.html;
          // res.text.should.be.a("text/html");
          res.text.should.be.eql(homer);
          done();
        });
    });
  });

  /*
   * Test the /modern route, should receive bradbury.html
   */
  describe("GET /modern path", () => {
    // TODO modify the it statement to use the function that has been
    // commented out below.
    // You also need to uncomment the needed parts.
    // As the result the status of the test should go from 'pending' to 'passing'
    // Even thou just leaving the function inside <em>end</em> method will pass,
    //  you must write the tests as described in the TODO inside the end method.
    it("it should GET the bradbury.html", (done) => {
      chai
        .request(server)
        .get("/modern")
        .end((err, res) => {
          // TODO: using the should style check that
          // a) the response's HTTP response status is
          // b) that the response is in HTML form
          // c) the text of the response is equal to bradbury.html
          res.should.have.status(200);
          res.should.be.html;
          // res.text.should.be.a("text/html");
          res.text.should.be.eql(bradbury);
          done();
        });
    });
  });
});
