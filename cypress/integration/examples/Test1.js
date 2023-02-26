/// <reference types="Cypress" />

describe("My first test suite", () => {
  it("My first test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    //cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);

    cy.get(".products").as("productsLocator");

    cy.get("@productsLocator").find(".product").should("have.length", 4);

    cy.get("@productsLocator")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click();

    cy.get("@productsLocator")
      .find(".product")
      .each(($el, _, _2) => {
        const productName = $el.find("h4.product-name").text();

        if (productName.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

      cy.get(".brand").should("have.text", "GREENKART");

    cy.get(".brand").then((logoElement) => {
      cy.log(logoElement.text());
    });

    // This will not work because of text() is a jquery method and not a cypress command
    // const logo = cy.get(".brand");
    //  cy.log(logo.text());
  });
});
