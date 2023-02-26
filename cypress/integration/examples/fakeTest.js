describe("Fake Test", () => {
  it("Fake Test Case", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    // Fake Test, Intercept Request && Response
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured",
            isbn: "abcde",
            aisle: "474",
          },
        ],
      }
    ).as("getBook");
    cy.get("button[data-target='#exampleModal']").click();
    cy.wait("@getBook").then(({ request, response }) => {
      cy.get("tr").should("have.length", response.body.length + 1);
      cy.log(response.body.length);
    });
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });
});
