const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;

chai.use(chaiHttp);
chai.should;

describe("Users", () => {
  describe("Sign in", () => {
    it("should sign in", done => {
      chai
        .request(app)
        .post("/user/signin")
        .send({ username: "boss@mail.com", password: "12345678" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe("Sign up", () => {
    it("should 404", done => {
      chai
        .request(app)
        .post("/user/signup")
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(500);
          done();
        });
    });
  });
});
