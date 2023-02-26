class HomePage {
  getNameBox() {
    return cy.get("input[name='name']:nth-child(2)");
  }

  getTwoWayBindingNameBox() {
    return cy.get("input[name='name']:nth-child(1)");
  }

  getGenderDropDown() {
    return cy.get("select");
  }

  getEntrepreneurCheckbox() {
    return cy.get("#inlineRadio3");
  }

  getShopTab() {
    return cy.get("a[href='/angularpractice/shop']");
  }
}

export default HomePage;
