const chai = require("chai");
const chaiHttp = require("chai-http");

const { app, runServer, closeServer } = require("../server");

const expect = chai.expect;
chai.use(chaiHttp);

// describe("Shopping List", function() {
//   before(function() {
//     return runServer();
//   });
//   after(function() {
//     return closeServer();
//   });
//   it("should list shopping list items on GET", function() {
//     return chai
//       .request(app)
//       .get("/shopping-list")
//       .then(function(res) {
//         expect(res).to.have.status(200);
//         expect(res).to.be.json;
//         expect(res.body).to.be.a("array");

//         expect(res.body.length).to.be.at.least(1);

//         const expectedKeys = ["id", "name", "checked"];
//         res.body.forEach(function(item) {
//           expect(item).to.be.a("object");
//           expect(item).to.include.keys(expectedKeys);
//         });
//       });
//   });

//   it("should add an item on POST", function() {
//     const newItem = { name: "coffee", checked: false };
//     return chai
//       .request(app)
//       .post("/shopping-list")
//       .send(newItem)
//       .then(function(res) {
//         expect(res).to.have.status(201);
//         expect(res).to.be.json;
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.include.keys("id", "name", "checked");
//         expect(res.body.id).to.not.equal(null);
//         expect(res.body).to.deep.equal(
//           Object.assign(newItem, { id: res.body.id })
//         );
//       });
//   });

//   it("should update items on PUT", function() {
//     const updateData = {
//       name: "foo",
//       checked: true
//     };

//     return (
//       chai
//         .request(app)
//         .get("/shopping-list")
//         .then(function(res) {
//           updateData.id = res.body[0].id;
//           return chai
//             .request(app)
//             .put(`/shopping-list/${updateData.id}`)
//             .send(updateData);
//         })

//         .then(function(res) {
//           expect(res).to.have.status(200);
//           expect(res).to.be.json;
//           expect(res.body).to.be.a("object");
//           expect(res.body).to.deep.equal(updateData);
//         })
//     );
//   });


//   it("should delete items on DELETE", function() {
//     return (
//       chai
//         .request(app)
//         .get("/shopping-list")
//         .then(function(res) {
//           return chai.request(app).delete(`/shopping-list/${res.body[0].id}`);
//         })
//         .then(function(res) {
//           expect(res).to.have.status(204);
//         })
//     );
//   });
// });


describe("Recipes", function() {
  before(function() {
    return runServer();
  });
  after(function() {
    return closeServer();
  });
  it("should list recipe items on GET", function() {
    return chai
      .request(app)
      .get("/recipes")
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a("array");

        expect(res.body.length).to.be.at.least(1);

        const expectedKeys = ["id", "name", "ingredients"];
        res.body.forEach(function(item) {
          expect(item).to.be.a("object");
          expect(item).to.include.keys(expectedKeys);
        });
      });
  });

  it("should add a recipe item on POST", function() {
    const newItem = { name: "coffee", ingredients: "beans" };
    return chai
      .request(app)
      .post("/recipes")
      .send(newItem)
      .then(function(res) {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.be.a("object");
        expect(res.body).to.include.keys("id", "name", "ingredients");
        expect(res.body.id).to.not.equal(null);
        expect(res.body).to.deep.equal(
          Object.assign(newItem, { id: res.body.id })
        );
      });
  });

  it("should update recipe items on PUT", function() {
    const updateData = {
      name: "foo",
      ingredients: "bar"
    };

    return (
      chai
        .request(app)
        .get("/recipes")
        .then(function(res) {
          updateData.id = res.body[0].id;
          return chai
            .request(app)
            .put(`/recipes/${updateData.id}`)
            .send(updateData);
        })

        .then(function(res) {
          expect(res).to.have.status(204);
          // expect(res).to.be.json;
          // expect(res.body).to.be.a("object");
          // expect(res.body).to.deep.equal(updateData);
        })
    );
  });


  it("should delete recipe items on DELETE", function() {
    return (
      chai
        .request(app)
        .get("/recipes")
        .then(function(res) {
          return chai.request(app).delete(`/recipes/${res.body[0].id}`);
        })
        .then(function(res) {
          expect(res).to.have.status(204);
        })
    );
  });
});
