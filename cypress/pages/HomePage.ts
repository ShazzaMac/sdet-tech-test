//This page is used to define selectors and methods for interacting with the Home Page of the Brightsg website.
//It promotes code reusability and maintainability through the Page Object Model (POM) design pattern.

export class HomePage {
  visit() {
    cy.visit("https://brightsg.com/");
  }

  closeLocationPopup() {
    cy.get('div[role="dialog"]').within(() => {
      cy.contains("Close").click({ force: true });
    });
  }

  heroSection() {
    return cy.get("section").first();
  }

  newsletterEmail() {
    return cy.get('input[type="email"]');
  }

  signUpButton() {
    return cy.contains("Sign-Up");
  }
}


