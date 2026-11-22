export class CreateProductPage {
    constructor(page) {
    this.page = page;
    this.productNameInput = page.locator('input[formcontrolname="name"]');
    this.categorySelect = page.locator('ng-select[formcontrolname="category_id"]');
    this.internalCodeInput = page.locator('input[formcontrolname="code"]');
    this.salePriceInput = page.locator('input[formcontrolname="price"]');
    this.minimumPriceInput = page.locator('input[formcontrolname="minimum_price"]');
    this.createProductButton = page.getByRole('button', { name: 'Crear Producto' });
    this.validationToast = page.getByRole('alertdialog', { name: 'Revisa los campos marcados en rojo' });
    this.minimumPriceError = page.locator('.invalid-feedback', {
     hasText: 'El precio mínimo no puede ser mayor al precio normal',
     });
    this.successToast = page.getByRole('alertdialog', { name: 'La información se guardó exitosamente' });
    }
  async fillProductName(newproductname) {
  await this.productNameInput.fill(newproductname);
  }
  async selectCategory(categoryname) {
  await this.categorySelect.click();
  await this.page.getByRole('option', { name: categoryname, exact: true }).click();
  }
  async fillInternalCode(code) {
  await this.internalCodeInput.fill(code);
  }
  async fillSalePrice(price) {
  await this.salePriceInput.fill(price);
  }
  async fillMinimumPrice(mprice) {
  await this.minimumPriceInput.fill(mprice);
  }
  async submitProduct() {
  await this.createProductButton.click();
  }
  
}