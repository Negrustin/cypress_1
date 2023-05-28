import { faker } from '@faker-js/faker';
import LoginPage from '../support/pageObjects/LoginPage';

describe('login page', () => {
  const loginPage = new LoginPage();
  const email = Cypress.env('CYPRESS_LOGIN');
  const password = Cypress.env('CYPRESS_PASSWORD')

  beforeEach(() => {
    loginPage.visit();
  });

  it('Should display welcome message after login', () => {
    loginPage.login(email, password);
    cy.contains(`Добро пожаловать ${email}`).should('be.visible');
  });

  it('Should validate email and password fields when login is null', () => {
    loginPage.login(null, null);
    loginPage.checkEmailValidity().should('be.false');
    loginPage.getEmailValidationMessage().should('contain', 'Заполните это поле.');
    loginPage.checkPasswordValidity().should('be.false');
  });

  it('Should validate email field when login is null', () => {
    loginPage.login(null, null);
    loginPage.checkEmailValidity().should('be.false');
    loginPage.checkPasswordValidity().should('be.false');
    loginPage.getPasswordValidationMessage().should('contain', 'Заполните это поле.');
  });

  it('Should display error message for invalid email or password', () => {
    const fakeEmail = faker.internet.email();
    const fakePassword = faker.internet.password();
  
    loginPage.login(fakeEmail, fakePassword);
    loginPage.checkErrorMessage().and('contain', 'Неправильая почта или пароль');
  });

  it('Should validate email field when email does not contain "@"', () => {
    const fakeEmailWithoutAt = faker.internet.userName() + faker.internet.domainName();
  
    loginPage.login(fakeEmailWithoutAt, null);
    loginPage.checkEmailValidity().should('be.false');
    loginPage.getEmailValidationMessage().should('contain', `Адрес электронной почты должен содержать символ "@". В адресе "${fakeEmailWithoutAt}" отсутствует символ "@"`);
  });

});