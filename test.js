const { expect } = require("chai");

const request = require("supertest")("https://restful-booker.herokuapp.com")
const except = require("chai").except;

//CREATE BOOKING
describe("CREATE BOOKING", function(){
    it("Success Create Booking", async function(){
        const response = await request
        .post("/booking")
        .set('content-type', 'application/json')
        .set('accept', 'application/json')
        .send({firstname: "Rezha",
        lastname: "Sachrian",
        totalprice: "212",
        depositpaid: "true",
        bookingdates: {
            checkin: "2023-02-01",
            checkout: "2023-02-02"
        },
        additionalneeds : "testing"});

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('bookingid');
        expect(response.body).to.have.property('booking');
        
        
    })
})

//GET BOOKING 'URL PARAMETER GET BOOKING/(RANDOM ID)'
describe("GET BOOKING", function(){
    it("Success Get Booking", async function(){
        const response = await request
        .get("/booking/11")
        .set('accept', 'application/json')
        .send({});

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('firstname');
        expect(response.body).to.have.property('lastname');
        expect(response.body).to.have.property('totalprice');
        expect(response.body).to.have.property('depositpaid');
        expect(response.body).to.have.property('bookingdates');
        expect(response.body).to.have.property('additionalneeds');

        })
})

//GET BOOKING IDs
describe("GET BOOKING IDs", function(){
    it("Success Get Booking IDs", async function(){
        const response = await request
        .get("/booking")
        .send({firstname : "Rezha",
        lastname : "Sachrian"});

        expect(response.status).to.equal(200);

        })
})