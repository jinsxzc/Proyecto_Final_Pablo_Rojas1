import { expect } from '@playwright/test';
export class QuickSalePage {
  constructor(page) {
    this.page = page; // Referencia a la página de Venta Rápida
  }
  
  //Agregar producto al carrito de venta rápida
  async añadir(PR_NAME) {
  await this.page.getByRole('heading', { name: PR_NAME, exact: true }).click();
  }
  //Abrir el carrito de venta rápida
  async abrirCarrito() {
  await this.page.getByRole('button', { name: 'Continuar con la compra' }).click();
  }
  //Escribir el nombre del cliente
  async escribirNombreCliente(CL_NAME) {
  await this.page.getByRole('textbox', { name: 'Nombre de cliente' }).fill(CL_NAME);
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