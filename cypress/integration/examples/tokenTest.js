const neatCSV = require("neat-csv");
describe("Token Test Suite", () => {
  it("Token Test Case", () => {
    cy.LoginAPI().then(() => {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: (window) => {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });

    cy.get(".card-body button:last-of-type").eq(0).click();
    cy.get("[routerlink*='cart']").click();
    cy.contains("Checkout").click();
    cy.get("[placeholder*='Country']").type("ind");

    cy.get(".ta-results button").each(($el, _, _2) => {
      if ($el.text().trim() === "India") {
        cy.wrap($el).click();
      }
    });
    cy.contains("Place Order").click();
    cy.wait(2000);
    cy.get(".order-summary button").click();

    cy.readFile(
      Cypress.config("fileServerFolder") +
        "/cypress/downloads/order-invoice_rahulshetty.csv"
    ).then(async (text) => {
      const csv = await neatCSV(text);
      console.log(csv);
    });
  });
});
