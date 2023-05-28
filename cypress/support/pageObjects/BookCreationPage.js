import {
  faker
} from '@faker-js/faker';
const randomBookTitle = faker.word.words(2);
const randomBookDescription = faker.word.words(10);
const randomAuthorFullName = faker.name.fullName();
class BookCreationPage {

  titleField = '#title';
  descriptionField = '#description';
  authorsField = '#authors';
  fileCoverField = '#fileCover';
  addBookButton = 'Add new';
  fileTextField = '#fileBook';
  submitButton = 'Submit';
  bookTitleSelector = '.card-title';
  bookAuthorSelector = '.card-text';
  addToFavoriteButton = 'Add to favorite';
  deleteFromFavoriteButton = 'Delete from favorite';

  addNewBook() {
    cy.contains(this.addBookButton).click();
  }

  enterTitle(title) {
    cy.get(this.titleField).type(title);
  }

  enterDescription(description) {
    cy.get(this.descriptionField).type(description);
  }

  enterAuthorName(authorName) {
    cy.get(this.authorsField).type(authorName);
  }

  uploadCover(file) {
    cy.get(this.fileCoverField).attachFile(file);
  }

  uploadTextFile(file) {
    cy.get(this.fileTextField).attachFile(file);
  }
  createBook(submitButton) {
    cy.contains(this.submitButton).click();
  }
  addBookToFavorite(){
    cy.contains(this.addToFavoriteButton).click()
  }
  deleteBookFromFavorite(){
    cy.contains(this.deleteFromFavoriteButton).click();
  }

  verifyAddedBookToFavorite() {
    cy.contains(this.deleteFromFavoriteButton).should('be.visible');
  }
  verifyRemoveBookToFavorite() {
    cy.contains(this.deleteFromFavoriteButton).should('not.be.visible');
  }


  createSomethingBook() {

    //create txt file
    const bookText = faker.word.words(500);
    cy.writeFile('cypress/fixtures/sample.txt', bookText);

    this.addNewBook();
    this.enterTitle(randomBookTitle);
    this.enterDescription(randomBookDescription);
    this.enterAuthorName(randomAuthorFullName);
    this.uploadCover('bookCover.jpg');
    this.uploadTextFile('sample.txt');
    this.createBook();
  }

  verifyBookDetails() {
    cy.get(this.bookTitleSelector).should('contain', randomBookTitle);
    cy.get(this.bookAuthorSelector).should('contain', randomAuthorFullName);
  }
}

export default BookCreationPage;
