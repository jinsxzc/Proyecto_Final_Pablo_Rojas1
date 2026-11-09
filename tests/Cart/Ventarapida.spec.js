import { test, expect } from '../fixtures';

test.use({ baseURL: process.env.BASE_URL });
const PRname = 'Chaufa'
const CLnombre = 'Nombre'



test.describe("VentaVirtual", () => {

  test("Agregar producto al carrito", async ({paginalogin, credenciales, homePage, ventaRapidaPage, invoicePage, pagoPage, datosVentaPage}) => {
    // Iniciar sesión
    await paginalogin.login(credenciales.username, credenciales.password);
    // Dar click en Ventas y luego en venta rápida
    await homePage.ventas();
    await homePage.ventaRapida();
    //Verificar URL de la pantalla de VentaRapida
    await ventaRapidaPage.verifyurl();
    // 1. Espera a que el catálogo cargue los productos
    await ventaRapidaPage.esperarCargaCatalogo();
    // Agregar producto al carrito de venta rápida
    await ventaRapidaPage.prnamevisible(PRname)
    await ventaRapidaPage.añadir(PRname);
    //validar que el producto se ha agregado al carrito
    await ventaRapidaPage.verifyprincart(PRname)
    await ventaRapidaPage.abrirCarrito();
    // Escribir el nombre del cliente y guardar
    await ventaRapidaPage.escribirNombreCliente(CLnombre);
    await ventaRapidaPage.guardarCliente();
    // Continuar al pago
    await invoicePage.continuaralpago();
    // Verificar que se ha llegado a la página de pago
    await pagoPage.verifyppurl()
    // Dar click en 'Efectivo' como método de pago
    await pagoPage.seleccionarEfectivo()
    // Dar click en 'Emitir comprobante'
    await pagoPage.emitirComprobante()
    // Comprobar la alerta de 'Venta registrada'
    await datosVentaPage.verificarVentaRegistrada()
  });
});