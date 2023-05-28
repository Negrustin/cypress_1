import { faker } from '@faker-js/faker';
import LoginPage from '../support/pageObjects/LoginPage';
import BookCreationPage from '../support/pageObjects/BookCreationPage';

describe('Book page', () => {
  const loginPage = new LoginPage();
  const bookCreationPage = new BookCreationPage();

  const email = Cypress.env('CYPRESS_LOGIN');
  const password = Cypress.env('CYPRESS_PASSWORD')

  beforeEach(() => {
    loginPage.visit('/');
  });

  it('successfully adds a new book with complete details', () => {

    loginPage.login(email,password);
  
        bookCreationPage.createSomethingBook();
        bookCreationPage.verifyBookDetails();
  
    
  });

  it.only('dfdsfdsfs', () => {

    loginPage.login(email,password);
  
        bookCreationPage.createSomethingBook();
        bookCreationPage.addBookToFavorite();
        bookCreationPage.addBookToFavorite()
        bookCreationPage.verifyAddedBookToFavorite()

       bookCreationPage.deleteBookFromFavorite();
  });
  
});
