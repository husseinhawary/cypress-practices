//let data;
beforeEach("Setup", () => {
  cy.fixture("example").then(function(fData) {
    this.data = fData
    //data = fData;
  });
});
