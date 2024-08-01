# Pruebas de Cypress para Validación de Cuotas en la Tienda Online de Movistar

## Introducción

Este proyecto contiene una suite de pruebas de Cypress para validar las opciones de cuotas disponibles al comprar un Samsung Galaxy A14 4G en la tienda online de Movistar.

## Entorno de Desarrollo

- **Sistema Operativo**: Windows 10 Pro
- **PC**: Ryzen 5, 16GB RAM, SSD 222GB
- **Navegador Utilizado para Testing**: Google Chrome v127

## Descripción

Esta suite de pruebas realiza las siguientes acciones:

1.  Visita la tienda online de Movistar.
2.  Busca el producto "A14".
3.  Selecciona el primer producto de los resultados de búsqueda.
4.  Abre el modal de cuotas.
5.  Selecciona el primer banco y tarjeta disponibles.
6.  Valida que exista la opción de pagar en 3 cuotas sin interés.
7.  Repite la validación para todos los bancos disponibles.

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

-   `cypress/support/page_objects/HomePage.js`: Contiene la clase HomePage con métodos para interactuar con la página.
-   `cypress/integration/spec001_validar_cuotas.js`: Contiene la suite de pruebas para validar las cuotas.

## Ejecución de las Pruebas

    
1.  `npx cypress open` 
    
2.  Ejecuta la prueba `spec001_validar_cuotas.js` desde la interfaz del Test Runner.
