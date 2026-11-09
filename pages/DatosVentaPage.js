import { expect } from '@playwright/test';
export class DatosVentaPage {
  constructor(page) {
    this.page = page; // Referencia a la página de Checkout
  }
  //Verificar que la venta se haya registrado correctamente
  async verificarVentaRegistrada() {
    await this.page.getByRole('alertdialog', { name: 'Venta registrada' });
  }
}
