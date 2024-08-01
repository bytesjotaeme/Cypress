Pruebas de Cypress para Validación de Cuotas en la Tienda Online de Movistar
Este proyecto contiene una suite de pruebas de Cypress para validar las opciones de cuotas disponibles al comprar un Samsung Galaxy A14 4G en la tienda online de Movistar.

Descripción
Esta suite de pruebas realiza las siguientes acciones:

Visita la tienda online de Movistar.
Busca el producto “A14”.
Selecciona el primer producto de los resultados de búsqueda.
Abre el modal de cuotas.
Selecciona el primer banco y tarjeta disponibles.
Valida que exista la opción de pagar en 3 cuotas sin interés.
Repite la validación para todos los bancos disponibles.
Requisitos Previos
Antes de ejecutar las pruebas, asegúrate de tener instalados los siguientes programas:

Node.js
npm
Cypress
Instalación
Clona el repositorio:

sh

Copiar código

git clone https://github.com/yourusername/your-repo-name.git cd your-repo-name

Instala las dependencias:

sh

Copiar código

npm install

Instala Cypress si no está instalado:

sh

Copiar código

npm install cypress --save-dev

Instala el plugin cypress-wait-until:

sh

Copiar código

npm install cypress-wait-until --save-dev

Estructura de Carpetas
Los archivos principales de interés son:

cypress/support/page_objects/HomePage.js: Contiene la clase HomePage con métodos para interactuar con la página.
cypress/integration/spec001_validar_cuotas.js: Contiene la suite de pruebas para validar las cuotas.
Ejecución de las Pruebas
npx cypress open

Ejecuta la prueba spec001_validar_cuotas.js desde la interfaz del Test Runner.
