// @ts-check
import { test, expect } from '@playwright/test';

test('login exitoso', async ({ page }) => {
  await page.goto('https://pos.kipu.com.pe');
  await page.getByLabel('Correo electrónico').fill('evolbrena@yopmail.com');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('26Restan12**');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  const buttonVentas = page.getByRole('button', { name: 'Ventas' });
  await expect(buttonVentas).toBeVisible();
  const buttonCaja = page.getByRole('button', { name: 'Caja' });
  await expect(buttonCaja).toBeVisible();
  const userMenuButton = page.getByRole('button', { name: 'Menú de usuario: Evol Brena1' });
  await expect(userMenuButton).toBeVisible();
})

//A este test le coloqué espera fija de 800ms a propósito para que falle luego de repetirlo varias veces, porque a veces tarda más de 1500ms en aparecer el mensaje de error.
test('login con usuario incorrecto', async ({ page }) => {
  await page.goto('https://pos.kipu.com.pe');
  await expect(page).toHaveURL('https://pos.kipu.com.pe/login?returnUrl=%2F');
  await page.getByLabel('Correo electrónico').fill('evolbrena@yopmail.con');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('26Restan12**');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  const ErrorMessage = page.getByText(/Credenciales incorrectas/i);
  await expect(ErrorMessage).toBeVisible({ timeout: 800 });
})

test('login con contraseña incorrecta', async ({ page }) => {
  await page.goto('https://pos.kipu.com.pe');
  await expect(page).toHaveURL('https://pos.kipu.com.pe/login?returnUrl=%2F');
  await page.getByLabel('Correo electrónico').fill('evolbrena@yopmail.com');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('26Restan12***');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  const ErrorMessage = page.getByText(/Credenciales incorrectas/i);
  await expect(ErrorMessage).toBeVisible();
})
//