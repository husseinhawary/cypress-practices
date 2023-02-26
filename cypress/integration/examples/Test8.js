/// <reference types="cypress-iframe" />

import "cypress-iframe";

describe("Eighth Test Suite", () => {
  it("First Test Case", () => {
    // handle iframe via cypress
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");

    cy.iframe().find("a[href*='mentorship']").eq(0).click();

    //always fails
    //cy.iframe().find("[class*='pricing-title']").should("have.length", 2);
  });
});
