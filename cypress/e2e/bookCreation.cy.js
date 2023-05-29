import { faker } from '@faker-js/faker';
import LoginPage from '../support/pageObjects/LoginPage';
import BookCreationPage from '../support/pageObjects/BookCreationPage';

describe('Book page', () => {
  const loginPage = new LoginPage();
  const bookCreationPage = new BookCreationPage();

  const accountName = Cypress.env('accountName') || 'test_user_1';
  const account = Cypress.env('accounts')[accountName];
  const email = account.login;
  const password = account.password;

  beforeEach(() => {
    loginPage.visit('/');
  });

  it('successfully adds a new book with complete details', () => {

    loginPage.login(email,password);
  
        bookCreationPage.createSomethingBook();
        bookCreationPage.verifyBookDetails();
  
    
  });

  it('adds and then removes a book from favorites', () => {

    loginPage.login(email,password);
  
        bookCreationPage.createSomethingBook();
        bookCreationPage.addBookToFavorite();
        bookCreationPage.verifyAddedBookToFavorite()

       bookCreationPage.deleteBookFromFavorite();
       bookCreationPage.verifyRemoveBookToFavorite()
  });


  


  
});
