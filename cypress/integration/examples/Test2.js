/// <reference types="Cypress" />

describe("My second test suite", () => {
  it("My second test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");

    cy.get(".products").as("productsLocator");

    cy.get("@productsLocator")
      .find(".product")
      .each(($el, _, _2) => {
        const productName = $el.find("h4.product-name").text();

        if (productName.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
    cy.get("button").contains("PROCEED TO CHECKOUT").click();
    cy.get("button").contains("Place Order").click();
  });
});
