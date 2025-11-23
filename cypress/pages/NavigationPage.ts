//This page is used to define selectors and methods for interacting with the Home Page of the Brightsg website.

export class NavigationPage {
  solutionsMenu() {
    return cy.contains("Software Solutions");
  }

  SMBLink() {
    return cy.contains("Small & Medium Businesses");
  }
}
