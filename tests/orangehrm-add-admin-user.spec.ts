import { test, expect, type Page } from '@playwright/test';

const BASE_URL = 'https://opensource-demo.orangehrmlive.com';
const USERNAME = 'Admin';
const PASSWORD = 'admin123';

async function login(page: Page) {
  await page.goto(`${BASE_URL}/web/index.php/auth/login`);
  await page.locator('input[name="username"]').waitFor({ state: 'visible', timeout: 15000 });
  await page.locator('input[name="username"]').fill(USERNAME);
  await page.locator('input[name="password"]').fill(PASSWORD);
  await page.locator('button[type="submit"]').click();

  await page.waitForURL(/\/dashboard\/index$/, { timeout: 20000 });
  await expect(page).toHaveURL(/\/dashboard\/index$/);
}

async function goToAdminUsers(page: Page) {
  await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
  await page.waitForURL(/\/admin\/viewSystemUsers$/, { timeout: 20000 });
  await expect(page).toHaveURL(/\/admin\/viewSystemUsers$/);
}

test('Add a new admin user in OrangeHRM', async ({ page }) => {
  const uniqueSuffix = `${Date.now()}`.slice(-6);
  const uniqueUsername = `qaadmin${uniqueSuffix}`;
  const password = 'Qwerty@123';

  await login(page);
  await goToAdminUsers(page);

  await page.locator('button:has-text("Add")').click();
  await expect(page.getByRole('heading', { name: /add user/i })).toBeVisible({ timeout: 15000 });

  await page.locator('div.oxd-select-wrapper').first().click();
  await page.locator('.oxd-select-dropdown').getByText('Admin').click();

  const employeeNameInput = page.locator('input[placeholder="Type for hints..."]').first();
  await employeeNameInput.waitFor({ state: 'visible', timeout: 15000 });
  await employeeNameInput.fill('A');

  const employeeOption = page.getByRole('option').first();
  await employeeOption.waitFor({ state: 'visible', timeout: 15000 });
  await employeeOption.click();

  const usernameInput = page.locator('.oxd-input-group').filter({ has: page.getByText('Username', { exact: true }) }).locator('input');
  await usernameInput.fill(uniqueUsername);

  await page.locator('div.oxd-select-wrapper').nth(1).click();
  await page.locator('.oxd-select-dropdown').getByText('Enabled').click();

  const passwordInput = page.locator('.oxd-input-group').filter({ has: page.getByText('Password', { exact: true }) }).locator('input[type="password"]');
  const confirmPasswordInput = page.locator('.oxd-input-group').filter({ has: page.getByText('Confirm Password', { exact: true }) }).locator('input[type="password"]');
  await passwordInput.fill(password);
  await confirmPasswordInput.fill(password);

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.locator('.oxd-toast')).toContainText(/success/i, { timeout: 20000 });

  await page.getByPlaceholder('Search').fill(uniqueUsername);
  await page.getByRole('button', { name: /search/i }).click();

  await expect(page.locator('div.oxd-table-card')).toContainText(uniqueUsername, { timeout: 20000 });
});
