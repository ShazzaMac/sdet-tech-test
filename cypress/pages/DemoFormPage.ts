

export class DemoFormPage {
  firstNameField() { return cy.get('input[name="first name"]'); }
  surnameField() { return cy.get('input[name="surname"]'); }
  phoneField() { return cy.get('input[name="phone"]'); }
  emailField() { return cy.get('input[name="email"]'); }
  companyField() { return cy.get('input[name="company"]'); }

  submitBtn() {
    return cy.contains("Submit");
  }

  successMessage() {
    return cy.contains(/thank/i);
  }

  errorMessage() {
    return cy.contains(/error/i);
  }
}
