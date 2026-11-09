import { expect } from '@playwright/test';
export class PagoPage {
  constructor(page) {
    this.page = page; // Referencia a la página de Checkout
  }
  //Seleccionar 'Efectivo' como método de pago
  async seleccionarEfectivo() {
    await this.page.getByRole('heading', { name: 'Efectivo' }).click();
  }
  //Dar click en 'Emitir comprobante'
  async emitirComprobante() {
    await this.page.getByRole('button', { name: 'Emitir comprobante' }).click();
  }
  //Verificar URL de página de pago
  async verifyppurl() {
    await expect(this.page).toHaveURL(/sales\/fast-create/);
  }
}