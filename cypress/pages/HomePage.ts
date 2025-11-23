// Page Object for BrightSG homepage
// Handles location popup, cookies, and provides hero selectors


class HomePage {
  visit() {
    cy.visit("https://brightsg.com");

    // --- Close Region Modal ---
    cy.get("div[role='dialog']", { timeout: 8000 }).then(($modal) => {
      if ($modal.length > 0) {
        cy.contains("United Kingdom").click({ force: true });
      }
    });

    // --- Accepst Cookie Banner ---
    cy.contains("Accept All Cookies", { timeout: 8000 }).then(($btn) => {
      if ($btn.length > 0) {
        cy.wrap($btn).click({ force: true });
      }
    });

    cy.wait(500); // ensure UI settles before further actions
  }

  // Robust hero selector with multiple fallbacks
  heroSection() {
    return cy.get(
      "div[class*='Hero'], div[class*='hero'], div[class*='banner']",
      { timeout: 10000 }
    ).first();
  }
}

export const home = new HomePage();
