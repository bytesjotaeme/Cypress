class HomePage {
    visit() {
      cy.visit('https://tiendaonline.movistar.com.ar');
      cy.url().should('include', 'movistar');
    }
  
    selectPriceRange() {
      cy.contains('Precio').scrollIntoView().click({ force: true });
      cy.contains('$ 250.000 - $ 500.000').click({ force: true });
      cy.get('li.clearfilter').contains('$ 250.000 - $ 500.000').should('be.visible');
    }
  
    selectMemory128GB() {
      cy.contains('Memoria interna').scrollIntoView().click({ force: true });
      cy.contains('128GB').click({ force: true });
      cy.get('li.clearfilter').contains('128GB').should('be.visible');
    }
  
    getProductCount() {
      return cy.get('.product-item', { timeout: 10000 }).as('productItems');
    }
  
    verifyFiltersApplied() {
      cy.get('li.clearfilter').should(($lis) => {
        const textArray = $lis.map((index, el) => Cypress.$(el).text().replace(/\u00a0/g, ' ').trim()).get();
        const expectedFilters = ['$ 250.000 - $ 500.000', '128GB'];
        
        expectedFilters.forEach(expectedFilter => {
          expect(textArray.some(text => text.includes(expectedFilter))).to.be.true;
        });
      });
    }
  
    takeScreenshot() {
      cy.screenshot('filtered-products');
    }
  }
  
  export default HomePage;
  