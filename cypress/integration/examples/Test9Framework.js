/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";

describe("Cypress Framework", () => {
  let data;
  before("Setup", () => {
    cy.fixture("example").then((fData) => {
      data = fData;
    });
  });
  it("First Test Case", () => {
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    cy.visit(Cypress.env("url") + "/angularpractice/");
    homePage.getNameBox().type(data.name);
    homePage.getGenderDropDown().select(data.gender);

    homePage.getTwoWayBindingNameBox().should("have.value", data.name);
    homePage.getNameBox().should("have.attr", "minlength", 2);
    homePage.getEntrepreneurCheckbox().should("be.disabled");

    // Using this in debugging
    //cy.pause();

    homePage.getShopTab().click();

    data.productName.map((product) => {
      cy.selectProduct(product);
    });

    productsPage.getCheckoutBtn().click();

    let sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($el, _, _2) => {
        const amount = +$el.text().substring(2).trim();
        sum += amount;
      })
      .then(() => {
        cy.log(sum);
      });

    cy.get("h3 strong").then((element) => {
      const totalAmount = +element.text().substring(2).trim();
      // expect(actualResult).to.equal(expectedResult);
      cy.log(totalAmount);
      expect(totalAmount).to.equal(sum);
    });

    cy.contains("Checkout").click();
    cy.get("#country").type("India");
    // This line to change the default waiting time on the spec level instead of changing it in the global config file and you can custom any configuration here
    Cypress.config("defaultCommandTimeout", 10000);
    cy.get(".suggestions a").each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });
    cy.get("input#checkbox2").check({ force: true });
    cy.get("input[value='Purchase']").click();
    cy.get("div.alert-success").then((element) => {
      const sucessMessageText = element.text();
      expect(sucessMessageText.includes("Success")).to.be.true;
    });
  });
});
