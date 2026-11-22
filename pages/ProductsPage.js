export class ProductsPage {
    constructor(page) {
    this.page = page;
    this.createProductLink = page.getByRole('link', { name: 'Crear Producto' });
    this.successToast = page.getByRole('alertdialog', { name: 'La información se guardó exitosamente' });
    this.searchInput = page.getByRole('searchbox', { name: 'Buscar:' });
    this.deleteMenuItem = page.getByRole('menuitem', { name: 'Eliminar' });
    this.confirmDeleteButton = page.getByRole('dialog').getByRole('button', { name: 'Aceptar' });
    this.deletedDialog = page.getByRole('dialog', { name: 'Registro eliminado' });
    this.deletedOkButton = this.deletedDialog.getByRole('button', { name: 'OK' });
    }
  async goToCreateProduct() {
  await this.createProductLink.click();
  }
  async searchProduct(name) {
  await this.searchInput.fill(name);
  }
  async openProductMenu(name) {
  await this.page
    .getByRole('button', { name: `Más acciones de ${name}`, exact: true })
    .click();
  }
  async deleteProduct(name) {
  await this.searchProduct(name);
  await this.openProductMenu(name);
  await this.deleteMenuItem.click();
  await this.confirmDeleteButton.click();
  }
  productByName(name) {
  return this.page.getByText(name, { exact: true });
  }
  async closeDeletedDialog() {
  await this.deletedOkButton.click();
  }
}