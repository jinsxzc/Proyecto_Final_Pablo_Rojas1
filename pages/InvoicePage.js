import { expect } from '@playwright/test';
export class InvoicePage {
  constructor(page) {
    this.page = page; // Referencia a la página de Invoice
  }
  //Dar click en Continuar al pago
  async continuaralpago() {
    await this.page.getByRole('button', { name: 'Continuar al pago' }).click();
  }
}