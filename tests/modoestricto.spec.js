// @ts-check
import { test, expect } from '@playwright/test';

test('modo estricto corregido por posición', async ({ page }) => {
  await page.goto('https://panel.qas.kipu.com.pe');
  const Contraseña = page.getByLabel(/Contraseña/i).first();
  await expect(Contraseña).toBeVisible();
});

//Como el textbox de contraseña no contiene el texto 'Contraseña' apuntaré al enlace '¿Olvidaste tu contraseña?' para el ejercicio
test('modo estricto corregido por texto',  async ({ page }) => {
  await page.goto('https://panel.qas.kipu.com.pe');
  const OlvidastePorTexto = page.locator('a').filter({ hasText: '¿Olvidaste tu contraseña?' }).first();
  await expect(OlvidastePorTexto).toBeVisible();
});

//Coloqué aquí el modo estricto fallado para que lo pueda ejecutar y mostrar el error, ya que si lo coloco al inicio no me permite ejecutar los demás tests.
test('modo estricto fallado', async ({ page }) => {
  await page.goto('https://panel.qas.kipu.com.pe');
  const Contraseña = page.getByLabel(/Contraseña/i);
  await expect(Contraseña).toBeVisible();
  //fallará porque el 'ojito' para mostrar la contraseña también tiene el label 'Contraseña', por lo que hay dos elementos con el mismo label y no se puede determinar cuál es el correcto.
});
