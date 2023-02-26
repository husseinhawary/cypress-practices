class ProductsPage {
  getProductTitle() {
    return cy.get("h4.card-title");
  }

  getProductAddBtn() {
    return cy.get("button.btn-info");
  }

  getCheckoutBtn() {
    return cy.contains("Checkout");
  }
}

export default ProductsPage;
