import HomePage from '../support/page_objects/HomePage3';

describe('CP003 - Validar cuotas en compra de equipo - Cuotas.60 - Equipo.Tercero de la lista - Banco.Credicoop - Tarjeta.Visa', () => {
  const homePage = new HomePage();

  it('Debe verificar que no exista el método de pago de 60 cuotas para el banco Credicoop con Tarjeta VISA', () => {
    // Visitar la página de Movistar
    homePage.visit();

    // Esperar a que la página cargue completamente
    homePage.waitForPageLoad();

    // Verificar que los productos están visibles
    homePage.verifyProductsVisible();

    // Seleccionar el tercer equipo de la lista inicial visible haciendo clic en el nombre del artículo
    homePage.selectThirdProduct();

    // Esperar a que la página del producto cargue completamente
    homePage.waitForPageLoad();

    // Hacer clic en "Calculá tus cuotas"
    homePage.clickCalculateInstallments();

    // Esperar a que se despliegue el modal de cuotas
    homePage.waitForModalVisible();

    // Escribir y seleccionar el banco Credicoop
    homePage.selectBank('Credicoop');

    // Escribir y seleccionar la tarjeta Visa
    homePage.selectCard('Visa');

    // Hacer clic en el botón "Calcular cuotas"
    homePage.clickCalculateButton();

    // Verificar que no exista un medio de pago con 60 cuotas
    cy.get('#installmentsTable', { timeout: 10000 }).should('be.visible');
    cy.get('#installmentsTable').within(() => {
      cy.contains('60 cuotas').should('not.exist');
    });
  });
});
