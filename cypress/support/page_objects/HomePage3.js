class HomePage {
    visit() {
      cy.visit('https://tiendaonline.movistar.com.ar');
    }
  
    waitForPageLoad() {
      cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    }
  
    verifyProductsVisible() {
      cy.get('.product-item', { timeout: 10000 }).should('be.visible');
    }
  
    selectThirdProduct() {
      cy.get('.product-item').eq(2).find('a').click({ force: true });
    }
  
    clickCalculateInstallments() {
      cy.contains('Calculá tus cuotas').should('be.visible').click({ force: true });
    }
  
    waitForModalVisible() {
      cy.get('#bankCardSelector', { timeout: 10000 }).should('be.visible');
    }
  
    selectBank(bankName) {
      cy.get('#inputbank').click({ force: true }).type(bankName);
      cy.waitUntil(() => cy.get('ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content').then($el => $el.is(':visible')), {
        timeout: 5000,
        interval: 500
      });
      cy.get('ul.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content li').contains(bankName).click({ force: true });
    }
  
    selectCard(cardName) {
      cy.get('#cardsArrow').click({ force: true });
      cy.wait(500); // Espera a que el dropdown se despliegue
      cy.get('#selectCardByBank').should('be.visible');
      cy.get('#selectCardByBank li').contains(cardName).click({ force: true });
    }
  
    clickCalculateButton() {
      cy.get('#calculate_btn .btn-primary').click({ force: true });
    }
  
    verifyNoInstallmentsWith60Quotas() {
      cy.get('#installmentsTable', { timeout: 10000 }).should('be.visible');
      cy.get('#installmentsTable').within(() => {
        cy.contains('60 cuotas').should('not.exist');
      });
    }
  }
  
  export default HomePage;
  