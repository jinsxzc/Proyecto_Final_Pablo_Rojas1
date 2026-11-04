// @ts-check
import { test, expect } from '@playwright/test';

test('Lectura Única', async ({ page }) => {
  await page.goto('https://panel.qas.kipu.com.pe');
  await page.getByLabel('Correo electrónico').fill('deliadmin@yopmail.com');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('26Restan12@@');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('button', { name: 'Ventas' }).click();
    await page.getByRole('link', { name: 'Venta rápida' }).click();
    await expect(page.getByRole('heading', { name: 'Menu', exact: true })).toBeVisible();
    await page.getByRole('textbox', { name: 'Buscar producto' }).fill('Ch');
  await expect(await page.getByText('Chaufa').isVisible()).toBe(true);
});

test('Espera fija', async ({ page }) => {
  await page.goto('https://panel.qas.kipu.com.pe');
  await page.getByLabel('Correo electrónico').fill('deliadmin@yopmail.com');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('26Restan12@@');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('button', { name: 'Ventas' }).click();
    await page.getByRole('link', { name: 'Venta rápida' }).click();
    await expect(page.getByRole('heading', { name: 'Menu', exact: true })).toBeVisible();
    await page.getByRole('textbox', { name: 'Buscar producto' }).fill('Ch');
  await page.waitForTimeout(1500);
    await expect(await page.getByText('Chaufa').isVisible()).toBe(true);
});

test('Espera explícita', async ({ page }) => {
    await page.goto('https://panel.qas.kipu.com.pe');
    await page.getByLabel('Correo electrónico').fill('deliadmin@yopmail.com');
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('26Restan12@@');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    await page.getByRole('button', { name: 'Ventas' }).click();
    await page.getByRole('link', { name: 'Venta rápida' }).click();
    await expect(page.getByRole('heading', { name: 'Menu', exact: true })).toBeVisible();
    await page.getByRole('textbox', { name: 'Buscar producto' }).fill('Ch');
    await expect(page.getByText('Chaufa')).toBeVisible();
});
