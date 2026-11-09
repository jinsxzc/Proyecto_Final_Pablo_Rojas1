import { expect } from '@playwright/test';
export class HomePage {
  constructor(page) {
    this.page = page;
    // Botones del menú lateral post-login en Kipu:
    this.salesButton = page.getByRole('button', { name: 'Ventas' });
    this.Ventas = page.getByRole('button', { name: 'Ventas' })
    this.ventaRapidaLink = page.getByRole('link', { name: 'Venta rápida' });
  }

  async ventas() {
    await this.Ventas.click();
  }

  async ventaRapida() {
    await this.ventaRapidaLink.click();
  }
}