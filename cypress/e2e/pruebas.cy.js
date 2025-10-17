/// <reference types="cypress" />

const sel = {
  email: '#email',
  password: '#password',
  loginBtn: '#loginBtn',
  error: '#error',
  welcome: '#welcome'
};

describe('Login Page – E2E', () => {
  beforeEach(() => {
    cy.visit('/login.html');
  });

  it('Login exitoso!!', () => {
    cy.get(sel.email).type('correcto@correcto.com');
    cy.get(sel.password).type('Correcto123');
    cy.get(sel.loginBtn).click();
    cy.url().should('include', '/dashboard.html');
    cy.get(sel.welcome).should('contain', 'Bienvenido, Señor CORRECTO, email: correcto@correcto.com');
  });

  it('Rechaza contraseña inválida y muestra mensaje de error', () => {
    cy.get(sel.email).type('correcto@correcto.com');
    cy.get(sel.password).type('contraseñaerronea');
    cy.get(sel.loginBtn).click();

    cy.url().should('include', '/login.html');
    cy.get(sel.error)
      .should('be.visible')
      .and('contain', 'Credenciales inválidas');
  });

  it('Rechaza email que no existe y muestra mensaje de error', () => {
    cy.get(sel.email).type('noexiste@noexiste.com');
    cy.get(sel.password).type('Correcto123');
    cy.get(sel.loginBtn).click();
    cy.get(sel.error)
      .should('be.visible')
      .and('contain', 'Credenciales inválidas');
  });

  it('Valida que email y contraseña sean obligatorios', () => {
    cy.get(sel.loginBtn).click();
    cy.get(sel.error)
      .should('be.visible')
      .and('contain', 'campos obligatorios!');
  });

  it('Normaliza espacios / mayúsculas en correo (trim + lowercase)', () => {
    cy.get(sel.email).type('  CORRECTO@Correcto.com  ');
    cy.get(sel.password).type('Correcto123');
    cy.get(sel.loginBtn).click();
    cy.url().should('include', '/dashboard.html');
    cy.get(sel.welcome).should('contain', 'correcto@correcto.com');
  });

  it('Permite enviar con la tecla "Enter" y funciona igual que un click', () => {
    cy.get(sel.email).type('correcto@correcto.com');
    cy.get(sel.password).type('Correcto123{enter}');
    cy.url().should('include', '/dashboard.html');
  });
});
