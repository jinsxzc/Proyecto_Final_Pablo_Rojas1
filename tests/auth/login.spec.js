// tests/auth/login.spec.js
import { test, expect } from "../fixtures";

test.describe("Autenticación", () => {
  test("inicio de sesion", async ({ loginPage, credentials }) => {
    // 1. Ejecutar el login
    await loginPage.login(credentials.username, credentials.password);

    // 2. Verificar que los botones de Ventas y Caja existen y son visibles
    await expect(loginPage.salesButton).toBeVisible();
    await expect(loginPage.cashboxButton).toBeVisible();
  });

  test("usuario inválido", async ({ loginPage, credentials }) => {
    // 1. Intenta login con el usuario erróneo inyectado desde el fixture/.env
    await loginPage.login(credentials.incorrectUser, credentials.password);

    // 2. Verifica la visibilidad del toast y su texto
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText("Credenciales incorrectas");
  });

  test("contraseña inválida", async ({ loginPage, credentials }) => {
    // 1. Intenta iniciar sesión con usuario válido y contraseña incorrecta
    await loginPage.login(credentials.username, credentials.incorrectPassword);

    // 2. Verifica que el toast aparezca y contenga el texto esperado
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText("Credenciales incorrectas");
  });

});