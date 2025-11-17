import { PopupSelectors } from '../selectors/popup.selectors';

describe('Bright SG Website Location Popup', () => {
  it('should display Ireland/UK location popup on page load', () => {
    cy.visit('/');
    cy.verifyElementVisible(PopupSelectors.locationPopup);
  });

  it('should navigate to Bright Ireland when Ireland icon is clicked', () => {
    cy.visit('/');
    cy.verifyElementVisible(PopupSelectors.locationPopup);
    cy.contains(PopupSelectors.irelandIcon, 'Ireland').click({force: true}); //Force click due to cookies
    cy.url().should('eq', 'https://brightsg.com/en-ie/');
  });

  it('should navigate to Bright UK when UK icon is clicked', () => {
    cy.visit('/');
    cy.verifyElementVisible(PopupSelectors.locationPopup);
    cy.contains(PopupSelectors.ukIcon, 'United Kingdom').click({force: true}); //Force click due to cookies
    cy.url().should('eq', 'https://brightsg.com/');
  });
});
