import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pageObjects/HomePage";
import ProductsPage from "../../../pageObjects/ProductsPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();
let name;
let gender;

Given("I open ecommerce page", () => {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("I add items to cart", function () {
  homePage.getShopTab().click();

  this.data.productName.map((product) => {
    cy.selectProduct(product);
  });

  productsPage.getCheckoutBtn().click();
});

When("Validate the total prices", () => {
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
    cy.log(totalAmount);
    expect(totalAmount).to.equal(sum);
  });
});

Then("Select the country submit and validate Thankyou", () => {
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

//When I fill the form details
When("I fill the form details", function (dataTable) {
  name = dataTable.rawTable[1][0];
  gender = dataTable.rawTable[1][1];
  homePage.getNameBox().type(name);
  homePage.getGenderDropDown().select(gender);
});

// Then Validate the form behavior
Then("Validate the form behavior", function () {
  homePage.getTwoWayBindingNameBox().should("have.value", name);
  homePage.getNameBox().should("have.attr", "minlength", 2);
  homePage.getEntrepreneurCheckbox().should("be.disabled");
});

// And Select the shop page
Then("Select the shop page", () => {
  homePage.getShopTab().click();
});
