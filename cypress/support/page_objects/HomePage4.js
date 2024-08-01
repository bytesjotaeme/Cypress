class HomePage {
    visit() {
        cy.visit('https://tiendaonline.movistar.com.ar');
    }

    searchProduct(product) {
        cy.get('button[class="action search"]').click({ force: true });
        cy.get('input[name="q"]').type(`${product}{enter}`);
    }

    selectFirstProduct() {
        cy.get('.product-item-info').first().click();
    }

    addToCart() {
        cy.get('#swatch_attribute_card').should('be.visible').click({ force: true });
    }

    goToCart() {
        cy.contains('Carrito').click();
    }

    verifyProductInCart(product) {
        cy.get('.cart.item', { timeout: 10000 }).should('contain.text', product);
    }

    goToHomePage() {
        cy.get('a[title="Tienda Movistar"]').click();
    }

    navigateToCategory(category) {
        cy.get(`a[data-path="${category}"]`).click({ force: true });
    }

    scrollToBottom() {
        cy.scrollTo('bottom', { duration: 2000 });
    }

    goToTermsAndConditions() {
        cy.contains('Centro de términos y condiciones').click({ force: true });
    }
}

export default HomePage;
