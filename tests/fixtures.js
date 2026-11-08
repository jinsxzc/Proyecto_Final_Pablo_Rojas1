// tests/fixtures.js
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend({
  // Fixture de la página
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  // Fixture de credenciales
  credentials: async ({}, use) => {
    await use({
      username: process.env.USER_NAME,
      password: process.env.USER_PASSWORD,
      incorrectUser: process.env.INCORRECT_USER || 'usuario_inexistente@correo.com',
      incorrectPassword: process.env.INCORRECT_PASSWORD || 'ClaveInvalida123*',
    });
  },

  // Fixture de usuario ya logueado
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(process.env.USER_NAME, process.env.USER_PASSWORD);
    await use(page);
  },
});

export { expect };