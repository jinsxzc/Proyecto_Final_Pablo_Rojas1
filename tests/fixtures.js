import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SaleDetailsPage } from '../pages/SaleDetailsPage';
import { IssueReceiptPage } from '../pages/IssueReceiptPage';
import { PaymentMethodPage } from '../pages/PaymentMethodPage';
import { QuickSalePage } from '../pages/QuickSalePage';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { CreateProductPage } from '../pages/CreateProductPage';

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },
    //Rellenar credenciales sacadas del .env
    credentials:async ({}, use) => {
        for (const name of ["LOGIN_USER", "LOGIN_PASSWORD", "INCORRECT_USER", "INCORRECT_PASSWORD", "BASE_URL"]) {
         if (!process.env[name]) {
         throw new Error(`La variable de entorno: ${name} esta vacía`);
         }
        }
        await use({
            username: process.env.LOGIN_USER,
            password: process.env.LOGIN_PASSWORD
        });
    },
    homePage: async ({ page }, use) => {
        await use( new HomePage(page));
    },
    productsPage: async ({ page }, use) => {
        await use( new ProductsPage(page));
    },
    createProductPage: async ({ page }, use) => {
        await use( new CreateProductPage(page));
    },
    issueReceiptPage: async ({ page }, use) => {
        await use( new IssueReceiptPage(page));
    },
    quickSalePage: async ({ page }, use) => {
        await use( new QuickSalePage(page));
    },
    paymentMethodPage: async ({ page }, use) => {
        await use( new PaymentMethodPage(page));
    },
    saleDetailsPage: async ({ page }, use) => {
        await use( new SaleDetailsPage(page));
    },
});
//exportar todo este expect
export { expect };