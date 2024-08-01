import HomePage from '../support/page_objects/HomePage4';

describe('CP004 - Simulación de compra sin realizarla en serio', () => {
    const homePage = new HomePage();

    // Añade el manejador de excepciones antes del test
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('jQuery')) {
            return false;
        }
        return true;
    });

    it('Debe simular una compra completa sin realizarla realmente', () => {
        cy.viewport(1280, 720); // Configura el tamaño de la pantalla
        homePage.visit();

        // Espera a que la página cargue completamente
        cy.wait(5000);

        // Buscar y seleccionar un producto
        homePage.searchProduct('A14');
        cy.wait(5000);
        homePage.selectFirstProduct();

        // Verificar que el producto es correcto y agregar al carrito
        cy.get('h1', { timeout: 20000 }).should('contain.text', 'Galaxy A14');
        homePage.addToCart();
        cy.wait(5000);
        homePage.goToCart();
        homePage.verifyProductInCart('Galaxy A14');

        // Volver a la página principal y navegar a categorías
        homePage.goToHomePage();
        cy.wait(5000);
        homePage.navigateToCategory('celulares-usados');
        cy.wait(5000);
        homePage.navigateToCategory('equipos-destacados');
        cy.wait(5000);
        homePage.scrollToBottom();

        // Haz clic en "Centro de términos y condiciones"
        cy.contains('Centro de términos y condiciones').should('be.visible').click({ force: true });

        // Espera a que la página de "Centro de términos y condiciones" cargue completamente
        cy.url().should('include', 'terminos-y-condiciones');

        // Recorre la página hacia abajo en "Centro de términos y condiciones"
        cy.scrollTo('bottom', { duration: 2000 });

        // Toma una captura de pantalla al final del test
        cy.screenshot('end_of_test');
    });
});
