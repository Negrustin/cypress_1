import { faker } from '@faker-js/faker';
import LoginPage from '../support/pageObjects/LoginPage';
import BookCreationPage from '../support/pageObjects/BookCreationPage';

describe('Favorites page', () => {
    const loginPage = new LoginPage();
    const bookCreationPage = new BookCreationPage();
  
    const email = Cypress.env('CYPRESS_LOGIN');
    const password = Cypress.env('CYPRESS_PASSWORD')
  
    beforeEach(() => {
      loginPage.visit('/');
    });

    it('my test', () => {
        bookCreationPage.createBookWithDetails()
    });
  
});
