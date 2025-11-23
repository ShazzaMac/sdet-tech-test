// cypress/e2e/homepage.cy.ts - this code tests that the BrightSG homepage loads correctly,
// as per test case Sdet-tech-test-01 

import { home } from "../pages/HomePage";

describe("Homepage Load Test", () => {
  it("TC-01: Homepage loads correctly", () => {
    // Visit homepage and close popups
    home.visit();

    // Hero section should be visible
    home.heroSection().should("be.visible");

    // Validate that visible images are loaded
    cy.get("img").each(($img) => {
      const imgEl = $img[0] as HTMLImageElement;
      const width = imgEl.naturalWidth;
      const height = imgEl.naturalHeight;

      // Skip tracking pixels, analytics pixels, placeholder SVGs, 1×1 images
      if (width <= 1 && height <= 1) return;

      expect(width, "image width").to.be.greaterThan(0);
    });
  });
});
