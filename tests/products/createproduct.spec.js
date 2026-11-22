import { test, expect } from '../fixtures';
import dataMinimumPrice from '../../test-data/data-minimumprice.json';

const CATEGORY_NAME = 'General'
const SALE_PRICE = '20';

test.describe("Crear producto: precio mínimo", () => {
  for (const { id, name, minimumPrice, isValid } of dataMinimumPrice) {
    test(`${id}: ${name}`, async ({createProductPage, productsPage, loginPage, credentials, homePage}) => {
  
  const uniqueSuffix = Date.now().toString().slice(-8);
  const productName = `mptest ${uniqueSuffix}`;

  await loginPage.login(credentials.username, credentials.password);
  await homePage.goToProductsPage();
  await productsPage.goToCreateProduct();

  await createProductPage.fillProductName(productName);
  await createProductPage.selectCategory(CATEGORY_NAME);
  await createProductPage.fillInternalCode(`MP${uniqueSuffix}`);
  await createProductPage.fillSalePrice(SALE_PRICE);
  await expect(createProductPage.salePriceInput).toHaveValue(SALE_PRICE);
  await createProductPage.fillMinimumPrice(minimumPrice);
  await createProductPage.submitProduct();

  if (isValid) {
    await expect(createProductPage.successToast).toBeVisible();
    await expect(productsPage.page).toHaveURL(/\/products$/);

    await productsPage.searchProduct(productName);
    await expect(productsPage.productByName(productName)).toBeVisible();

    await productsPage.deleteProduct(productName);
    await expect(productsPage.deletedDialog).toBeVisible();
    await productsPage.closeDeletedDialog();
    await expect(productsPage.productByName(productName)).toHaveCount(0);
    
  } else {
    await expect(createProductPage.validationToast).toBeVisible();
    await expect(createProductPage.minimumPriceError).toBeVisible();
    await expect(createProductPage.page).toHaveURL(/products\/create/);
    await expect(createProductPage.minimumPriceError).toHaveText(/El precio mínimo no puede ser mayor al precio normal/);
  }
  });
 }
});