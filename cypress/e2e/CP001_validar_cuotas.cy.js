const HomePage = require('../support/page_objects/HomePage');

describe('Validar cuotas en compra de equipo A14', () => {
  before(() => {
    // Establecer viewport para pruebas responsivas
    cy.viewport(1280, 720);
    HomePage.visit();
  });

  it('Debería poder buscar el equipo A14 y verificar que se pueda pagar en 3 cuotas sin interés', () => {
    HomePage.searchProduct('A14');
    
    // Verificar que el primer producto sea visible y seleccionarlo
    HomePage.selectFirstProduct();
    
    // Verificar URL después de seleccionar el producto
    cy.url().should('include', 'samsung-galaxy-a14-4g');
    
    HomePage.openInstallmentsModal();
    HomePage.selectBankAndCard();
    
    HomePage.validateThreeInstallments();

    // Tomar una captura de pantalla
    cy.screenshot('validacion-cuotas-equipo-A14');
  });
});

import 'cypress-wait-until';
