# Proyecto_Final_Pablo_Rojas1
Proyecto Final del Bootcamp

Requisitos: Node.js y Git

Instalación: git clone, npm install, npx playwright install chromium, copiar .env.example a .env

Ejecución: inicio de sesión y venta

Estructura de carpetas:
Docs: Documento de alcance
Evidencias: Screenshots
Pages: Archivos page de cada página
Playwrigh-report: reportes de playwright
test-results: resultados de cada test
tests: fixtures.js y carpetas de tests:
tests/auth: test de login
tests/sale: test de venta rápida
tests/products: tests de crear producto

Correr las pruebas entre las 10:00hr y 21:00hr porque el servidor no está habilitado fuera de ese rango de horas.
Ocasionalmente, se habilita el servidor fuera de ese horario así que también podrías intentar.

Flujos automatizados hasta el momento:
Inicio de Sesión(login.spec)
Venta Rápida(quicksale.spec)
Crear Producto(createproduct.spec)

venta rápida tiene array de 4 productos y su data-quicksale.json en la carpeta test-data
crear producto tiene array de 2 Casos de Prueba y su data-minimumprice.json en la carpeta test-data (Es para validar si el campo "Precio mínimo" funciona correctamente cuando es mayor/menor que el "Precio de venta")