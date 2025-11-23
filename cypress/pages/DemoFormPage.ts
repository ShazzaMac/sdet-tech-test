
// cypress/pages/DemoFormPage.ts - POM for Demo Form page
export class DemoFormPage {
  firstNameField() {
    const sel = 'input[name="firstname"], input[name="first_name"], input[name^="first"], input[placeholder*="First"], input[aria-label*="First"]';
    return cy.get(sel, { timeout: 20000 }).first();
  }

  surnameField() {
    const sel = 'input[name="surname"], input[name="lastname"], input[name="last_name"], input[name^="last"], input[placeholder*="Last"], input[aria-label*="Last"]';
    return cy.get(sel, { timeout: 20000 }).first();
  }

  phoneField() {
    const sel = 'input[name="phone"], input[type="tel"], input[placeholder*="Phone"], input[aria-label*="Phone"]';
    return cy.get(sel, { timeout: 20000 }).first();
  }

  emailField() {
    const sel = 'input[name="email"], input[type="email"], input[placeholder*="Email"], input[aria-label*="Email"]';
    return cy.get(sel, { timeout: 20000 }).first();
  }

  companyField() {
    const sel = 'input[name="company"], input[name*="company"], input[placeholder*="Company"], input[aria-label*="Company"]';
    return cy.get(sel, { timeout: 20000 }).first();
  }

  // the form submit button may vary so multiple selectors with fallbacks have been added
  submitBtn() {
    return cy
      .get('input[type="submit"], input.hs-button, button[type="submit"], input[value*="Book a demo"], input[value*="Book a Demo"], input[value*="Sign up to our newsletter"]', { timeout: 20000 })
      .first();
  }

  successMessage() {
    
    return cy.contains(/thank|thanks|submitted|success/i, { timeout: 10000 });
  }

  errorMessage() {
    return cy.contains(/error|failed|invalid/i, { timeout: 10000 });
  }
}
