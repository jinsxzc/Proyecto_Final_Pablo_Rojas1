import { expect } from '@playwright/test';
export class PaymentMethodPage {
  constructor(page) {
    this.page = page; // Referencia a la página de Checkout
  }
  //Seleccionar 'Efectivo' como método de pago
  async selectCash() {
    await this.page.getByRole('heading', { name: 'Efectivo' }).click();
  }
  //Dar click en 'Emitir comprobante'
  async issueReceipt() {
    await this.page.getByRole('button', { name: 'Emitir comprobante' }).click();
  }
}