import { test, expect, type Page } from '@playwright/test';

async function openFlipkartAndSearch(page: Page, searchText: string) {
  await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });

  const closePopupButton = page.getByRole('button', { name: /close|✕/ }).first();
  if (await closePopupButton.isVisible().catch(() => false)) {
    await closePopupButton.click();
  }

  const searchInput = page.getByRole('textbox', { name: /Search for Products, Brands/i }).first();
  await searchInput.waitFor({ state: 'visible', timeout: 10000 });
  await searchInput.fill(searchText);
  await page.locator('button[type="submit"]').first().click();

  await page.waitForLoadState('networkidle');
}

test('TC1 - Search for perfume for men on Flipkart', async ({ page }) => {
  // Explanation: This test opens the Flipkart website, finds the search box, enters the text "perfume for men", and submits the search.
  await openFlipkartAndSearch(page, 'perfume for men');

  await expect(page).toHaveURL(/search/);
});

test('TC2 - Verify the search term appears on the results page', async ({ page }) => {
  // Explanation: This test confirms that the search query was accepted and the results page loads with the same search text.
  await openFlipkartAndSearch(page, 'perfume for men');

  const searchInput = page.locator('input[title="Search for Products, Brands and More"]');
  await expect(searchInput).toHaveValue('perfume for men');
  await expect(page).toHaveURL(/search/);
});


