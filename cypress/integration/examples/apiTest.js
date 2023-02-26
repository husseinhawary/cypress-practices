describe("API Test", () => {
  it("API Test Case", () => {
    cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
      name: "Learn Appium Automation with Java",
      isbn: "H_El",
      aisle: "25863",
      author: "H_El",
    }).then((res) => {
      expect(res.body).to.have.property("Msg", "successfully added");
      expect(res.status).to.eq(200);
    });
  });
});
