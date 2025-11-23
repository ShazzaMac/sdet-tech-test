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
│       └── homepage.cy.ts            # Test specifications - TEST CASE 01 & TEST CASE 05
│       └── navigation.cy.ts          # Test specifications - TEST CASE 02
├── pages/
│       └── DemoFormPage.ts             # Implements POM
│       └── FooterPage.ts               # Implements POM
│       └── HomePage.ts                 # Implements POM
│       └── locationPopuNavigationPage  # Implements POM
├── cypress.config.ts          # Cypress configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## Current Test Coverage
 - `locationPopup.cy.ts` - Verifies location popup appears on Bright SG homepage
 - `demoForm.cy.ts`      - Verifies that the form accepts valid data and rejects invalid data
 - `homepage.cy.ts`      - Verifies that the home page loads and tests navigation to instagram 
 - `navigation.cy.ts`    - Validates the user is correctly re-directed to correct endpoint


  --- Last Test Run Results---


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  demoForm.cy.ts                           00:15        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  homepage.cy.ts                           00:14        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  locationPopup.cy.ts                      00:13        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  navigation.cy.ts                         00:11        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:54        7        7        -        -        -  


## Task
Expand this framework by adding:
- Additional test scenarios 👌
- Page Object Model implementation 👌
- Custom commands 👌 (+1 ADDED)
- Improved assertions and error handling 👌
