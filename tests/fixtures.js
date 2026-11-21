import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SaleDetailsPage } from '../pages/SaleDetailsPage';
import { IssueReceiptPage } from '../pages/IssueReceiptPage';
import { PaymentMethodPage } from '../pages/PaymentMethodPage';
import { QuickSalePage } from '../pages/QuickSalePage';
import { HomePage } from '../pages/HomePage';

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },
    //Rellenar credenciales sacadas del .env
    credenciales:async ({}, use) => {
        await use({
            username: process.env.USER_NAME,
            password: process.env.USER_PASSWORD
        });
    },
    homePage: async ({ page }, use) => {
        await use( new HomePage(page));
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