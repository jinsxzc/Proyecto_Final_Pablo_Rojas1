// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Correo electrónico' });
    this.passwordInput = page.getByRole('textbox', { name: 'Contraseña' });
    this.submitButton = page.getByRole('button', { name: /Iniciar sesión/i });

    // Mensaje de toast de error en Kipu:
    this.errorMessage = page.locator('.kauth__toast-text');

    // Botones del menú lateral post-login en Kipu:
    this.salesButton = page.getByRole('button', { name: 'Ventas' });
    this.cashboxButton = page.getByRole('button', { name: 'Caja' });
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL || 'https://panel.qas.kipu.com.pe/');
  }

  async login(username, password) {
    await this.goto();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}