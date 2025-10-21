const { expect } = require("chai");

describe("Create new User", () => {

    it("create new user is success", async() => {
        const response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: "Fikri Wicaksono",
                job: "QA Engineer",
            }),
        });

        const data = await response.json();
        console.log(data);

        // assertion
        expect(response.status).to.equal(201); // positive case
        expect(data.name).to.equal("Fikri Wicaksono");
        expect(data.name).to.include("Wicaksono");
        // expect(response.status).to.equal(400); // seharusnya 201 (negative case)
    });
});

