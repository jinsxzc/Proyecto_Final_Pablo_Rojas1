import { test, expect } from '../fixtures';
import dataQuickSale from '../../test-data/data-quicksale.json';

test.use({ baseURL: process.env.BASE_URL });

test.describe('Venta rápida', () => {
  for (const { id, name, productName, customerName } of dataQuickSale) {
    test(`${id}: ${name}`, async ({ loginPage, credentials, homePage, quickSalePage, issueReceiptPage, paymentMethodPage, saleDetailsPage}) => {
    // Iniciar sesión
    await loginPage.login(credentials.username, credentials.password);
    // Dar click en Ventas y luego en venta rápida
    await homePage.sales();
    await homePage.quickSale();
    //Verificar URL de la pantalla de VentaRapida
    await expect(quickSalePage.page).toHaveURL(/sales\/fast-create/)
    // 1. Espera a que el catálogo cargue los productos
    await expect(quickSalePage.page.locator('.card-product-description').first()).toBeVisible();
    // Agregar producto al carrito de venta rápida
    await expect(quickSalePage.page.getByRole('heading', { name: productName, exact: true })).toBeVisible();
    await quickSalePage.add(productName);
    //validar que el producto se ha agregado al carrito
    await expect(quickSalePage.page.locator('.item-card-product').filter({ hasText: productName })).toBeVisible();
    await quickSalePage.proceedToCheckout();
    // Escribir el nombre del cliente y asignarlo a la venta
    await quickSalePage.fillCustomerName(customerName);
    await quickSalePage.assignCustomerToSale();
    // Continuar al pago
    await issueReceiptPage.goToPaymentMethodPage();
    // Verificar que se ha llegado a la página de pago
    await expect(paymentMethodPage.page).toHaveURL(/sales\/fast-create/);
    // Dar click en 'Efectivo' como método de pago
    await paymentMethodPage.selectCash()
    // Dar click en 'Emitir comprobante'
    await paymentMethodPage.issueReceipt()
    // Comprobar la alerta de 'Venta registrada'
    await expect(saleDetailsPage.page.getByRole('alertdialog', { name: 'Venta registrada' })).toBeVisible();
  });
 }
});