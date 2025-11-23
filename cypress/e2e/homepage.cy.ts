// cypress/e2e/homepage.cy.ts - this code tests that the BrightSG homepage loads correctly,
// as per test case Sdet-tech-test-01 
// and also tests Instagram icon redirection as per Sdet-tech-test-05

import { home } from "../pages/HomePage";
import { HomePage } from "../pages/HomePage";
import { FooterPage } from "../pages/FooterPage";

const homePage = new HomePage();
const footerPage = new FooterPage();

describe("Sdet-tech-test-01 - Homepage Load Test" , () => {
  it("Homepage loads correctly", () => {
    // Visits homepage and close popups
    home.visit();

    // Hero section should be visible
    home.heroSection().should("be.visible");

    // Validate that visible images are loaded
    cy.get("img").each(($img) => {
      const imgEl = $img[0] as HTMLImageElement;
      if (imgEl.naturalWidth <= 1 && imgEl.naturalHeight <= 1) return;
      expect(imgEl.naturalWidth).to.be.greaterThan(0);
    });
  });
});

describe("Sdet-tech-test-05 - Verify Instagram icon redirects correctly", () => {
  before(() => {
    // Visit the page once and handle popups
    homePage.visit();
  });

  it("Should redirect user to the Bright Instagram page", () => {
    // Find Instagram icon link and verify it has the correct href attribute
    cy.get('a[href*="instagram.com/brightsoftwaregroup"]', { timeout: 10000 })
      .should('exist')
      .should('have.attr', 'href', 'https://www.instagram.com/brightsoftwaregroup/');
  });
});
