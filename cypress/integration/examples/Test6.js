describe("Sixth Test Suite", () => {
  it("First Test Case", () => {
    cy.wait(3000);
    // Mouse hover and click on the invisible buttons
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Mouse hover and click on the invisible buttons by JQuery also Cypress has the ability to click on invisible buttons
    // cy.get("div.mouse-hover-content").invoke("show");
    // cy.contains("Top").click();
    // cy.url().should("contain", "top");

    // Clicking in the invisible element by passing {force: true}
    cy.contains("Top").click({ force: true });
    cy.url().should("contain", "top");
  });
});
