describe("Third Test Suite", () => {
  it("First Test Case", () => {
    cy.wait(3000);
    // Checkboxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    cy.get("input[type='checkbox']").check().should("be.checked");
    cy.get("input[type='checkbox']").uncheck().should("not.be.checked");

    // Cypress allows you to check multiple checkboxes by usning the array or options values as the following
    cy.get("input[type='checkbox']")
      .check(["option2", "option3"])
      .should("be.checked");

    // Static Dropdown
    cy.get("select").select("option2").should("have.value", "option2");

    // Dynamic Dropdown list

    cy.get("#autocomplete").type("ind");

    cy.get(".ui-menu-item div").each(($el, _, _2) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });

    // Visible && Non visible textbox
    cy.get("#autocomplete").should("have.value", "India");

    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");

    // Radio Button

    cy.get("[value='radio2']").check().should("be.checked");
    cy.get("[value='radio1']").check().should("be.checked");
    cy.get("[value='radio2']").click().should("be.checked");

  });
});
