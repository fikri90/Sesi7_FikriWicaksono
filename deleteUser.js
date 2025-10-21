const { expect } = require("chai");

describe("Delete User", () => {

    it("User has been deleted", async () => {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "DELETE",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: "Fikri Wicaksono",
                job: "QA Engineer",
            }),
        });

        // assertion
        expect(response.status).to.equal(204);
        console.log("User berhasil di hapus, status : ", response.status);
 
    });
});

