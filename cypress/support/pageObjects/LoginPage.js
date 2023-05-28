class LoginPage {
    emailField = '#mail';
    passwordField = '#pass';
    errorMessage = '.text-danger';
  
    visit() {
      cy.visit('/');
    }
  
    login(email, password) {
      cy.login(email, password);
    }
  
    checkEmailValidity() {
      return cy.get(this.emailField)
        .then((element) => element[0].checkValidity());
    }
  
    getEmailValidationMessage() {
      return cy.get(this.emailField)
        .then((element) => element[0].validationMessage);
    }
  
    checkPasswordValidity() {
      return cy.get(this.passwordField)
        .then((element) => element[0].checkValidity());
    }
  
    getPasswordValidationMessage() {
      return cy.get(this.passwordField)
        .then((element) => element[0].validationMessage);
    }
  
    checkErrorMessage() {
      return cy.get(this.errorMessage).should('be.visible');
    }
  }
  
  export default LoginPage;
  