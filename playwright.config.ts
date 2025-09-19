import { defineConfig } from '@playwright/test';


const baseURL = process.env.BASE_URL ?? 'http://localhost:3000';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL
  },
  reporter: [['list']]
});
