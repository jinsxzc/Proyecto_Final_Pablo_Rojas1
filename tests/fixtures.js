import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DatosVentaPage } from '../pages/DatosVentaPage';
import { InvoicePage } from '../pages/InvoicePage';
import { PagoPage } from '../pages/PagoPage';
import { VentaRapidaPage } from '../pages/VentaRapidaPage';
import { HomePage } from '../pages/HomePage';

export const test = base.extend({
    paginalogin: async ({ page }, use) => {
        const paginalogin = new LoginPage(page);
        await paginalogin.goto();
        await use(paginalogin);
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
    invoicePage: async ({ page }, use) => {
        await use( new InvoicePage(page));
    },
    ventaRapidaPage: async ({ page }, use) => {
        await use( new VentaRapidaPage(page));
    },
    pagoPage: async ({ page }, use) => {
        await use( new PagoPage(page));
    },
    datosVentaPage: async ({ page }, use) => {
        await use( new DatosVentaPage(page));
    },
});
//exportar todo este expect
export { expect };