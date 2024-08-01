## Introducción

Este proyecto contiene una suite de pruebas de Cypress.
## Entorno de Desarrollo

- **Sistema Operativo**: Windows 10 Pro
- **PC**: Ryzen 5, 16GB RAM, SSD 222GB
- **Navegador Utilizado para Testing**: Google Chrome v127

## Requisitos Previos

Antes de ejecutar las pruebas, asegúrate de tener instalados los siguientes programas:

-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/)
-   [Cypress](https://www.cypress.io/)

## Instalación

1.  Clona el repositorio:
    
    `git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name` 
    
2.  Instala las dependencias:
    
    `npm install` 
    
3.  Instala Cypress si no está instalado:
    
    `npm install cypress --save-dev` 
    
4.  Instala el plugin `cypress-wait-until`:
    
    `npm install cypress-wait-until --save-dev` 
    

## Estructura de Carpetas

Los archivos principales de interés son:

Contiene la clase HomePage con métodos para interactuar con la página.
-   `cypress/support/page_objects/HomePage.js`: 
- -   `cypress/support/page_objects/HomePage2.js`
- -   `cypress/support/page_objects/HomePage3.js`
- -   `cypress/support/page_objects/HomePage4.js`
 
Contiene la suite de pruebas
-   `cypress\e2e\CP001_validar_cuotas.cy.js`
-   `cypress\e2e\CP002_Aplicar_filtro_de_equipos.cy.js`
-   `cypress\e2e\CP003_Validar_cuotas_en_compra_de_equipo.cy.js`
-   `cypress\e2e\CP004 _Simulacion_de_compra.cy.js`

## Ejecución de las Pruebas

    
1.  `npx cypress open` 
    
2.  Ejecuta la prueba `spec001_validar_cuotas.js` desde la interfaz del Test Runner.

1. ## **CP001 - Validar cuotas en compra de equipo 

Esta suite de pruebas realiza las siguientes acciones:

1.  Visita la tienda online de Movistar.
2.  Busca el producto "A14".
3.  Selecciona el primer producto de los resultados de búsqueda.
4.  Abre el modal de cuotas.
5.  Selecciona el primer banco y tarjeta disponibles.
6.  Valida que exista la opción de pagar en 3 cuotas sin interés.

 
2.  ## 2. **CP002 - Aplicar filtro de equipos  

**Descripción:** Este test verifica que los filtros de precio y memoria en la tienda en línea de Movistar funcionan correctamente y se aplican como se espera.

**Pasos del test:**

-   Configura el viewport al tamaño de una pantalla de MacBook de 15 pulgadas.
-   Visita la página principal de la tienda en línea de Movistar.
-   Aplica un filtro de precio entre $250,000 y $500,000.
-   Aplica un filtro de memoria de 128GB.
-   Espera 3 segundos para que los resultados se carguen.
-   Verifica que los filtros se han aplicado correctamente.
-   Obtiene la cantidad de productos filtrados y valida que sea mayor a 0.
-   Toma una captura de pantalla de los productos filtrados.

**HomePage Methods:**

-   `visit()`: Navega a la página de Movistar y verifica la URL.
-   `selectPriceRange()`: Aplica el filtro de precio.
-   `selectMemory128GB()`: Aplica el filtro de memoria de 128GB.
-   `getProductCount()`: Obtiene el conteo de productos filtrados.
-   `verifyFiltersApplied()`: Verifica que los filtros se han aplicado.
-   `takeScreenshot()`: Toma una captura de pantalla de los productos filtrados.

3.   ### **CP003 - Validar cuotas en compra de equipo**

**Descripción:** Este test verifica que no exista el método de pago de 60 cuotas para el banco Credicoop con tarjeta Visa en la tienda en línea de Movistar.

**Pasos del test:**

-   Visita la página principal de la tienda en línea de Movistar.
-   Espera a que la página cargue completamente.
-   Verifica que los productos están visibles.
-   Selecciona el tercer equipo de la lista.
-   Espera a que la página del producto cargue completamente.
-   Haz clic en "Calculá tus cuotas".
-   Espera a que se despliegue el modal de cuotas.
-   Selecciona el banco Credicoop y la tarjeta Visa.
-   Haz clic en el botón "Calcular cuotas".
-   Verifica que no exista un método de pago con 60 cuotas.

**HomePage Methods:**

-   `visit()`: Navega a la página de Movistar.
-   `waitForPageLoad()`: Espera a que la página cargue.
-   `verifyProductsVisible()`: Verifica que los productos están visibles.
-   `selectThirdProduct()`: Selecciona el tercer producto.
-   `clickCalculateInstallments()`: Haz clic en "Calculá tus cuotas".
-   `waitForModalVisible()`: Espera a que el modal de cuotas sea visible.
-   `selectBank(bankName)`: Selecciona el banco.
-   `selectCard(cardName)`: Selecciona la tarjeta.
-   `clickCalculateButton()`: Haz clic en el botón "Calcular cuotas".
-   `verifyNoInstallmentsWith60Quotas()`: Verifica que no existan 60 cuotas.

4.  ### **CP004 - Simulación de compra sin realizarla en serio**

**Descripción:** Este test simula una compra completa en la tienda en línea de Movistar sin realizar la compra realmente.

**Pasos del test:**

-   Configura el tamaño de la pantalla.
-   Visita la página principal de la tienda en línea de Movistar.
-   Espera a que la página cargue completamente.
-   Busca y selecciona un producto (Galaxy A14).
-   Verifica que el producto es correcto y lo agrega al carrito.
-   Va al carrito y verifica que el producto esté en el carrito.
-   Vuelve a la página principal y navega a diferentes categorías.
-   Haz clic en "Centro de términos y condiciones".
-   Espera a que la página de términos y condiciones cargue completamente.
-   Recorre la página hacia abajo y toma una captura de pantalla al final del test.

**HomePage Methods:**

-   `visit()`: Navega a la página de Movistar.
-   `searchProduct(product)`: Busca un producto.
-   `selectFirstProduct()`: Selecciona el primer producto.
-   `addToCart()`: Agrega el producto al carrito.
-   `goToCart()`: Va al carrito.
-   `verifyProductInCart(product)`: Verifica que el producto esté en el carrito.
-   `goToHomePage()`: Vuelve a la página principal.
-   `navigateToCategory(category)`: Navega a una categoría.
-   `scrollToBottom()`: Recorre la página hacia abajo.
-   `goToTermsAndConditions()`: Navega a la página de términos y condiciones.
