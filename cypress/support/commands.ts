declare global {
  namespace Cypress {
    interface Chainable {
      verifyElementVisible(selector: string): Chainable<void>;
      safeClick(selector: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('verifyElementVisible', (selector: string) => {
  cy.get(selector).should('be.visible');
});

export {};

// Custom Command 01 -  The safeClick command ensures the element is visible before clicking it
Cypress.Commands.add("safeClick", (selector: string) => {
  cy.get(selector).should("be.visible").click({ force: true });
});



