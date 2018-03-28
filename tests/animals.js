const assert = require("assert") 
const request = require("supertest") 
const app = require("../app") 

describe("Animals routes", () => {
    it("can list animals", done => {
        request(app)
            .get("/animals")
            .expect(200)
            .then(response => {
                assert.deepEqual(response.body.animals, [{
                    id: 1,
                    name: "Wilbur",
                    breed: "Pig"
                }, {
                    id: 2,
                    name: "Glooey",
                    breed: "Horse"
                }]) 
                done() 
            }).catch(error => {
                done(error) 
            })
    }) 
}) 