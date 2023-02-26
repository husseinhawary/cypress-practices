describe("Fifth Test Suite", () => {
  it("First Test Case", () => {
    // Table
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("tr td:nth-child(2)").each(($el, index, _2) => {
      const text = $el.text();

      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((price) => {
            const coursePrice = price.text();
            cy.log(coursePrice);
            expect(coursePrice).to.equal("25");
          });
      }
    });
  });
});
