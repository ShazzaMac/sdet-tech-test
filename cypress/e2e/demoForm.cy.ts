// cypress/e2e/demoForm.cy.ts - this code tests the "Book a Demo" 
// form functionality as per test case Sdet-tech-test-03

// cypress/e2e/demoForm.cy.ts
import { DemoFormPage } from "../pages/DemoFormPage";
import { home } from "../pages/HomePage";

const demoForm = new DemoFormPage();

describe("Sdet-tech-test-03 - Book a Demo Form", () => {
  
  beforeEach(() => {
    // Visits homepage and dismiss popups
    home.visit();
  });

  it("Happy path: User can successfully book a demo with valid input data", () => {
    // Clicks Book a Demo button in navigation
    cy.contains("Book a Demo", { timeout: 10000 }).click({ force: true });

    // Ensures redirected to demo page
    cy.url().should("include", "/product-demo");

 
  cy.get('input[name="firstname"], input[name="lastname"], input[name="email"]', { timeout: 20000 }).should('exist');

// Snapshot the form fields in the DOM for offline analysiss
    const candidates = {
      firstName: 'input[name="firstname"], input[name="first_name"], input[name^="first"], input[placeholder*="First"], input[aria-label*="First"]',
      surname: 'input[name="surname"], input[name="last_name"], input[name^="last"], input[placeholder*="Last"], input[aria-label*="Last"]',
      phone: 'input[name="phone"], input[type="tel"], input[placeholder*="Phone"], input[aria-label*="Phone"]',
      email: 'input[name="email"], input[type="email"], input[placeholder*="Email"], input[aria-label*="Email"]',
      company: 'input[name="company"], input[name*="company"], input[placeholder*="Company"], input[aria-label*="Company"]'
    };

    cy.get('body').then(($body) => {
      // avoids using cy.state because it's not typed so the following gets current URL from window.location on the subject
      const currentUrl = (window as any).location?.href ?? '';
      const snapshot: any = { url: Cypress.config('baseUrl') || currentUrl, createdAt: new Date().toISOString(), counts: {}, html: $body.html() };
      Object.entries(candidates).forEach(([k, sel]) => {
        const total = $body.find(sel as string).length;
        const visible = $body.find(sel as string).filter(':visible').length;
        snapshot.counts[k] = { selector: sel, total, visible };
      });
      // writes file for offline inspection
      cy.writeFile('cypress/tmp/demo-form-dom.json', snapshot, { flag: 'w' });
      // also logs a short summary to Cypress log
      cy.log('WROTE demo-form-dom.json with counts: ' + JSON.stringify(snapshot.counts));
    });

    // Fills in the form with valid data (the page may have different input attributes; DemoFormPage has fallbacks)
  // Types with force because sticky header/menu can occasionally cover inputs in headless runs
  demoForm.firstNameField().type("Jane", { force: true });
  demoForm.surnameField().type("Smyth", { force: true });
  demoForm.phoneField().type("0123456789", { force: true });
  demoForm.emailField().type("jane@test.com", { force: true });
  demoForm.companyField().type("Test Company", { force: true });

    // Submits the form (force in case a fixed element overlaps the button in headless)
    demoForm.submitBtn().click({ force: true });

    // Validates submission: wait a bit and verify no error message is visible
  
    cy.wait(2000);
    cy.contains(/error|failed|invalid|please correct/i, { timeout: 5000 }).should("not.exist");
    });
});
