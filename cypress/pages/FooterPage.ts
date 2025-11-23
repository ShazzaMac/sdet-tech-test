// cypress/pages/FooterPage.ts - POM for Footer page
export class FooterPage {

  closeChatBubble() {
    cy.get('body').then(($body) => {
      const btn = $body.find('[data-test-id="ai-welcome-msg-close-button"]');
      if (btn.length > 0 && btn.is(':visible')) {
        cy.wrap(btn).click({ force: true });
      }
    });
  }

  closeBlackFridayPopup() {
    cy.get('body').then(($body) => {
      const popup = $body.find('div.hs-image-widget');
      if (popup.length > 0 && popup.is(':visible')) {
        const closeBtn = popup.find('button, .close, .close-btn');
        if (closeBtn.length > 0) {
          cy.wrap(closeBtn).first().click({ force: true });
        }
      }
    });
  }

  scrollToFooter() {
    // Close overlays first
    this.closeChatBubble();
    this.closeBlackFridayPopup();

    // Wait for footer to exist and scroll into view
    cy.get('footer', { timeout: 15000 }).should('exist').scrollIntoView({ duration: 500 });

    // Extra safety: ensure footer is in view (no unsupported options)
    cy.get('footer').scrollIntoView();
  }

  instagramIcon() {
    // Scroll footer into view first, then find Instagram link with multiple fallback selectors
    cy.get('footer', { timeout: 10000 }).scrollIntoView();
    return cy
      .get('footer a[href*="instagram"], footer a:has(i.fa-instagram), footer li a[href*="instagram.com"]', { timeout: 10000 })
      .first();
  }
}
