describe("Fake Test", () => {
  it("Fake Test Case", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    // Fake Test, Intercept Request && Response
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";
        req.continue((res) => {
          // expect(res.statusCode).to.equal(403);
        });
      }
    ).as("dummyURL");
    cy.get("button[data-target='#exampleModal']").click();
    cy.wait("@dummyURL");
  });
});
