import { test, expect } from '../fixtures';

test.describe("Autenticación", () => {

  test("inicio de sesion", async ({paginalogin, credenciales}) => {
    // 1. Ejecutar el login
    await expect(paginalogin.page).toHaveURL('/login?returnUrl=%2F%2F');
    await paginalogin.login(credenciales.username, credenciales.password);
    // 2. Verificar que los botones de Ventas y Caja existen y son visibles
    await expect(paginalogin.salesButton).toBeVisible();
    await expect(paginalogin.cashboxButton).toBeVisible();
    await expect(paginalogin.page).toHaveURL(process.env.BASE_URL);
  });

  test("usuario inválido", async ({paginalogin, credenciales}) => {
    // 1. Intenta login con el usuario erróneo inyectado desde el fixture/.env
    await paginalogin.login(process.env.INCORRECT_USER, credenciales.password);

    // 2. Verifica la visibilidad del toast y su texto
    await expect(paginalogin.errorMessage).toBeVisible();
    await expect(paginalogin.errorMessage).toContainText("Credenciales incorrectas");
    await expect(paginalogin.errorMessage).not.toContainText("servidor");
    await expect(paginalogin.page).toHaveURL('/login?returnUrl=%2F%2F'); // Verifica que la URL no cambió
  });

  test("contraseña inválida", async ({paginalogin, credenciales}) => {
    // 1. Intenta iniciar sesión con usuario válido y contraseña incorrecta
    await paginalogin.login(credenciales.username, process.env.INCORRECT_PASSWORD);

    // 2. Verifica que el toast aparezca y contenga el texto esperado
    await expect(paginalogin.errorMessage).toBeVisible();
    await expect(paginalogin.errorMessage).toContainText("Credenciales incorrectas");
    await expect(paginalogin.errorMessage).not.toContainText("servidor"); //esta línea solo pasará el test debug pero si es que se presiona antes de que desaparezca la alerta
    await expect(paginalogin.page).toHaveURL('/login?returnUrl=%2F%2F'); // Verifica que la URL no cambió
  });
});