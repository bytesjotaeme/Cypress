import HomePage from '../support/page_objects/HomePage2';

describe('Movistar Store Filters Test', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.viewport('macbook-15'); // Configurar la vista del viewport
  });

  it('Applies filters for price and memory and checks the number of results', () => {
    // Visitar la página de Movistar
    homePage.visit();

    // Aplicar filtro de precio entre $250,000 y $500,000
    homePage.selectPriceRange();

    // Aplicar filtro de memoria interna de 128GB
    homePage.selectMemory128GB();

    // Esperar a que los resultados se carguen
    cy.wait(3000);

    // Verificar que los filtros se han aplicado
    homePage.verifyFiltersApplied();

    // Obtener la cantidad de productos filtrados y validar
    homePage.getProductCount().then($products => {
      const productCount = $products.length;
      cy.log('Number of products found:', productCount);

      // Validar que la cantidad de productos sea mayor a 0
      expect(productCount).to.be.greaterThan(0);
    });

    // Tomar una captura de pantalla de los productos filtrados
    homePage.takeScreenshot();
  });
});
