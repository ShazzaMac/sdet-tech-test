# SDET Technical Test

## Prerequisites
- Node.js (v16 or higher)
- npm

## Setup
Install dependencies:
```bash
npm install
```

## Running Tests

### Headless Mode
```bash
npm test
```

### Interactive Mode
```bash
npm run cy:open
```
Select E2E Testing and choose your browser.

## Project Structure
```
sdet-tech-test/
├── cypress/
│   └── e2e/
│       └── locationPopup.cy.ts       # Test specifications - DEMO PROVIDED
│       └── demoForm.cy.ts            # Test specifications - TEST CASE 03
│       └── homepage.cy.ts            # Test specifications - TEST CASE 01
│       └── navigation.cy.ts          # Test specifications - TEST CASE 02
├── pages/
│       └── DemoFormPage.ts             # Implements POM
│       └── HomePage.ts                 # Implements POM
│       └── locationPopuNavigationPage  # Implements POM
├── cypress.config.ts          # Cypress configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## Current Test Coverage
 - `locationPopup.cy.ts` - Verifies location popup appears on Bright SG homepage
 - `demoForm.cy.ts`      - Verifies that the form accepts valid data and rejects invalid data
 - `homepage.cy.ts`      - Verifies that the home page loads
 - `navigation.cy.ts`   - Validates the user is correctly re-directed to correct endpoint

## Task
Expand this framework by adding:
- Additional test scenarios 👌
- Page Object Model implementation 👌
- Custom commands 👌 (+1 ADDED)
- Improved assertions and error handling 👌
