const assert = require("assert");
const { expect } = require('chai');

describe("List", function(){

  it("get list biasa", async function () {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    console.log(data);
    console.log("ini data dari get list biasa / tanpa chai");

    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.data[0].first_name, "Michael");
    assert.strictEqual(data.data[0].id, 7);    
  });

  it("get list chai", async function () {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    console.log(data);
    console.log("ini data dari get list menggunakan chai")

    // assertion
    expect(response.status).to.equal(200);
  });

});

