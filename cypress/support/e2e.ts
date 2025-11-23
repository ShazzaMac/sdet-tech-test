import './commands';

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Script error')) {
    return false;
  }
  return true;
});

// Sets navigator.language to 'en-GB' before the window loads
Cypress.on('window:before:load', (win) => {
  Object.defineProperty(win.navigator, 'language', {
    get: () => 'en-GB',
  });
});
