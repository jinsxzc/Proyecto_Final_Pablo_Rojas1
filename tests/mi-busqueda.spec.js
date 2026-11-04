// @ts-check
import { test, expect } from '@playwright/test';

test('Busqueda sin resultados', async ({ page }) => {
  await page.goto('https://panel.qas.kipu.com.pe');
  await page.getByLabel('Correo electrónico').fill('deliadmin@yopmail.com');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('26Restan12@@');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('button', { name: 'Ventas' }).click();
  await page.getByRole('link', { name: 'Venta rápida' }).click();
  await page.getByRole('textbox', { name: 'Buscar producto' }).fill('xyz');
  //El tohavecount(0) debe pasar porque no hay productos con el nombre 'xyz'
  await expect(page.locator('.card-product', { hasText: 'xyz' })).toHaveCount(0)
  //el tohavecount(1) debe fallar
  await expect(page.locator('.card-product', { hasText: 'xyz' })).toHaveCount(1, { timeout: 3000 });
});
