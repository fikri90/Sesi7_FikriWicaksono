const { expect } = require("chai");

describe("Update User", () => {

    it("update user must be successed!!", async () => {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "PATCH",
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
        expect(response.status).to.equal(200);
        expect(data.name).to.equal("Fikri Wicaksono");
        expect(data.job).to.equal("QA Engineer");
    });
});

