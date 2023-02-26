describe("Seventh Test Suite", () => {
  it("First Test Case", () => {
    // handle opening another window by getting the href attribute value
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").then((el) => {
      const url = el.prop("href");
      cy.log(url);

      cy.visit(url);
    });
  });
});
