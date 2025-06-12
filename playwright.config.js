import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: "npm run start",
    url: "http://localhost:8080/",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  testDir: "./e2e-tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
    baseURL: "http://localhost:8080/",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});

