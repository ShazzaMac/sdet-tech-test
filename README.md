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
│       └── locationPopup.cy.ts       # Test specifications
├── cypress.config.ts          # Cypress configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## Current Test Coverage
- `locationPopup.cy.ts` - Verifies location popup appears on Bright SG homepage

## Task
Expand this framework by adding:
- Additional test scenarios
- Page Object Model implementation
- Custom commands
- Improved assertions and error handling
