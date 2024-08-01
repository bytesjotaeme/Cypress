class HomePage {
  visit() {
    cy.visit('https://tiendaonline.movistar.com.ar');
  }

  showSearch() {
    cy.get('button[class="action search"]').click({ force: true });
    cy.get('div.field.search').invoke('attr', 'style', 'display: block !important');
    cy.get('input[name="q"]').should('be.visible');
  }

  searchProduct(productName) {
    this.showSearch();
    cy.get('input[name="q"]').type(`${productName}{enter}`);
  }

  selectFirstProduct() {
    cy.get('.product-item-info').first().should('be.visible').click();
  }

  openInstallmentsModal() {
    cy.get('#open-installments-modal').click();
  }

  selectBankAndCard() {
    // Seleccionar el banco emisor
    cy.get('#banksArrow').click({ force: true });
    cy.get('input[name="inputbank"]').type('{downarrow}{enter}', { force: true });

    // Esperar a que el menú de tarjetas esté visible
    cy.get('#cardsArrow').click({ force: true });
    cy.get('div#selectCardByBank').invoke('attr', 'style', 'display: block !important');
    cy.get('#selectCardByBank ul').find('li').first().click({ force: true });
  }

  validateThreeInstallments() {
    cy.get('#calculate_btn button').should('be.visible').click({ force: true });
    cy.waitUntil(() => cy.get('#installmentsTable').should('be.visible'), {
      errorMsg: 'La tabla de cuotas no se hizo visible a tiempo',
      timeout: 10000,
      interval: 500,
    });
    cy.get('#installmentsTable').within(() => {
      cy.contains('3 cuotas sin interés').should('be.visible');
    });
  }
}

module.exports = new HomePage();
