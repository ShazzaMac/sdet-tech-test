import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://brightsg.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    env: {
      ukUrl: 'https://brightsg.com/',
      irelandUrl: 'https://brightsg.com/en-ie/',
    },
  },
});
