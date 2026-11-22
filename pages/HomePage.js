import { expect } from '@playwright/test';
export class HomePage {
  constructor(page) {
    this.page = page;
    // Botones del menú lateral post-login en Kipu:
    this.salesButton = page.getByRole('button', { name: 'Ventas' });
    this.quickSaleLink = page.getByRole('link', { name: 'Venta rápida' });
    this.dataMenuButton = page.getByRole('button', { name: 'Datos', exact: true });
    this.productsLink = page.getByRole('link', { name: 'Productos' });
  }
  async goToProductsPage() {
    await this.dataMenuButton.click();
    await this.productsLink.click();
  }
  async sales() {
    await this.salesButton.click();
  }
  async quickSale() {
    await this.quickSaleLink.click();
  }
  async logout() {
    await this.page.getByRole('button', { name: /Menú de usuario/ }).click();
    await this.page.getByRole('menuitem', { name: 'Cerrar Sesión' }).click();
  }
}