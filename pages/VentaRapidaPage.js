import { expect } from '@playwright/test';
export class VentaRapidaPage {
  constructor(page) {
    this.page = page; // Referencia a la página de Venta Rápida
  }
  
  //Verificar que la URL sea la correcta
  async verifyurl() {
  await expect(this.page).toHaveURL(/sales\/fast-create/);
  }
  //Verificar que al menos una tarjeta de producto esté visible
  async esperarCargaCatalogo() {
    await expect(this.page.locator('.card-product-description').first()).toBeVisible();
  }
  //Verificar que el nombre del Producto esté visible
  async prnamevisible(PRname) {
  await expect(this.page.getByRole('heading', { name: PRname, exact: true })).toBeVisible();
  }
  //Agregar producto al carrito de venta rápida
  async añadir(PRname) {
  await this.page.getByRole('heading', { name: PRname, exact: true }).click();
  }
  //Verificar que el producto se haya añadido correctamente al carrito
  async verifyprincart(PRname) {
  await expect(this.page.locator('.item-card-product').filter({ hasText: PRname })).toBeVisible();
  }
  //Abrir el carrito de venta rápida
  async abrirCarrito() {
  await this.page.getByRole('button', { name: 'Continuar con la compra' }).click();
  }
  //Escribir el nombre del cliente
  async escribirNombreCliente(CLnombre) {
  await this.page.getByRole('textbox', { name: 'Nombre de cliente' }).fill(CLnombre);
  }
  //Dar click en "Guardar" para proceder al invoicepage
  async guardarCliente() {
  await this.page.getByRole('button', { name: 'Guardar' }).click();
  }
  //Por si es que se necesitara este método para ir a la página de venta rápida. Lo dejaré aquí
  async goto() {
    await this.page.goto('/');
  }
}