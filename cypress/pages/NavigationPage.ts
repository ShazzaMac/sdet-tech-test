//This page is used to define selectors and methods for interacting with the Home Page of the Brightsg website.

export class NavigationPage {
  softwareSolutionsMenu() {
    return cy.contains("Software Solutions");
  }

  smallMediumBusinessesLink() {
    return cy.contains("Small & Medium Businesses");
  }

  hoverSoftwareSolutions() {
    this.softwareSolutionsMenu().trigger("mouseover");
  }

  clickSmallMediumBusinesses() {
    this.smallMediumBusinessesLink().click({ force: true });
  }
}

export const nav = new NavigationPage();

