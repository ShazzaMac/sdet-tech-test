// cypress/e2e/navigation.cy.ts - tests navigation to Small & Medium Businesses page
// as per test case Sdet-tech-test-02

import { home } from "../pages/HomePage";

describe("Navigation to Small & Medium Businesses page", () => {
  it("Sdet-tech-test-02: Navigation to SMB page works correctly", () => {
    // --- Preconditions: Homepage loads + popups dismissed ---
    home.visit();

    // --- Hovers over Software Solutions ---
    cy.contains("Software Solutions", { timeout: 8000 })
      .trigger("mouseover");

    // --- Click Small & Medium Businesses ---
    cy.contains("Small & Medium Businesses", { timeout: 8000 })
      .click({ force: true });

    // --- Expected URL when redirected---
    cy.url().should("include", "/bright-for-businesses");

    // --- Validates that page content loads ---
    cy.get("h1, h2, main")
      .should("be.visible");

    });
  });

