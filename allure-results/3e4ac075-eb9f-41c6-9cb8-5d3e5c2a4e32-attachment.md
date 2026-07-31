# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehrm-add-admin-user.spec.ts >> Add a new admin user in OrangeHRM
- Location: tests\orangehrm-add-admin-user.spec.ts:24:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('.oxd-autocomplete-dropdown').getByText(/Aaliyah/i).first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Admin" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: manda user
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: User Management
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - text: Job
              - generic [ref=e137]: 
          - listitem [ref=e138] [cursor=pointer]:
            - generic [ref=e139]:
              - text: Organization
              - generic [ref=e140]: 
          - listitem [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - text: Qualifications
              - generic [ref=e143]: 
          - listitem [ref=e144] [cursor=pointer]:
            - link "Nationalities" [ref=e145]:
              - /url: "#"
          - listitem [ref=e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=e147]:
              - /url: "#"
          - listitem [ref=e148] [cursor=pointer]:
            - generic [ref=e149]:
              - text: Configuration
              - generic [ref=e150]: 
          - button "" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]: 
  - generic [ref=e154]:
    - generic [ref=e157]:
      - heading "Add User" [level=6] [ref=e158]
      - separator [ref=e159]
      - generic [ref=e160]:
        - generic [ref=e162]:
          - generic [ref=e164]:
            - generic [ref=e166]: User Role*
            - generic [ref=e169] [cursor=pointer]:
              - generic [ref=e170]: Admin
              - generic [ref=e172]: 
          - generic [ref=e174]:
            - generic [ref=e176]: Employee Name*
            - generic [ref=e178]:
              - textbox "Type for hints..." [active] [ref=e180]: A
              - listbox [ref=e181]:
                - option "A8DCo 4Ys 010Z" [ref=e182] [cursor=pointer]:
                  - generic [ref=e183]: A8DCo 4Ys 010Z
                - option "Nguyen A" [ref=e184] [cursor=pointer]:
                  - generic [ref=e185]: Nguyen A
                - option "Nguyen Van A" [ref=e186] [cursor=pointer]:
                  - generic [ref=e187]: Nguyen Van A
                - option "Ranga Akunuri" [ref=e188] [cursor=pointer]:
                  - generic [ref=e189]: Ranga Akunuri
                - option "Timothy Lewis Amiano" [ref=e190] [cursor=pointer]:
                  - generic [ref=e191]: Timothy Lewis Amiano
          - generic [ref=e193]:
            - generic [ref=e195]: Status*
            - generic [ref=e198] [cursor=pointer]:
              - generic [ref=e199]: "-- Select --"
              - generic [ref=e201]: 
          - generic [ref=e203]:
            - generic [ref=e205]: Username*
            - textbox [ref=e207]
        - generic [ref=e209]:
          - generic [ref=e210]:
            - generic [ref=e211]:
              - generic [ref=e213]: Password*
              - textbox [ref=e215]
            - paragraph [ref=e216]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=e218]:
            - generic [ref=e220]: Confirm Password*
            - textbox [ref=e222]
        - separator [ref=e223]
        - generic [ref=e224]:
          - paragraph [ref=e225]: "* Required"
          - button "Cancel" [ref=e226] [cursor=pointer]
          - button "Save" [ref=e227] [cursor=pointer]
    - generic [ref=e228]:
      - paragraph [ref=e229]: OrangeHRM OS 5.9
      - paragraph [ref=e230]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e231] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect, type Page } from '@playwright/test';
  2  | 
  3  | const BASE_URL = 'https://opensource-demo.orangehrmlive.com';
  4  | const USERNAME = 'Admin';
  5  | const PASSWORD = 'admin123';
  6  | 
  7  | async function login(page: Page) {
  8  |   await page.goto(`${BASE_URL}/web/index.php/auth/login`);
  9  |   await page.locator('input[name="username"]').waitFor({ state: 'visible', timeout: 15000 });
  10 |   await page.locator('input[name="username"]').fill(USERNAME);
  11 |   await page.locator('input[name="password"]').fill(PASSWORD);
  12 |   await page.locator('button[type="submit"]').click();
  13 | 
  14 |   await page.waitForURL(/\/dashboard\/index$/, { timeout: 20000 });
  15 |   await expect(page).toHaveURL(/\/dashboard\/index$/);
  16 | }
  17 | 
  18 | async function goToAdminUsers(page: Page) {
  19 |   await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
  20 |   await page.waitForURL(/\/admin\/viewSystemUsers$/, { timeout: 20000 });
  21 |   await expect(page).toHaveURL(/\/admin\/viewSystemUsers$/);
  22 | }
  23 | 
  24 | test('Add a new admin user in OrangeHRM', async ({ page }) => {
  25 |   const uniqueSuffix = `${Date.now()}`.slice(-6);
  26 |   const uniqueUsername = `qaadmin${uniqueSuffix}`;
  27 |   const password = 'Qwerty@123';
  28 | 
  29 |   await login(page);
  30 |   await goToAdminUsers(page);
  31 | 
  32 |   await page.locator('button:has-text("Add")').click();
  33 |   await expect(page.getByRole('heading', { name: /add user/i })).toBeVisible({ timeout: 15000 });
  34 | 
  35 |   await page.locator('div.oxd-select-wrapper').first().click();
  36 |   await page.locator('.oxd-select-dropdown').getByText('Admin').click();
  37 | 
  38 |   const employeeNameInput = page.locator('input[placeholder="Type for hints..."]').first();
  39 |   await employeeNameInput.waitFor({ state: 'visible', timeout: 15000 });
  40 |   await employeeNameInput.fill('A');
  41 | 
  42 |   const employeeOption = page.locator('.oxd-autocomplete-dropdown').getByText(/Aaliyah/i).first();
> 43 |   await employeeOption.waitFor({ state: 'visible', timeout: 15000 });
     |                        ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  44 |   await employeeOption.click();
  45 | 
  46 |   const usernameInput = page.locator('div').filter({ hasText: /Username/i }).locator('input').first();
  47 |   await usernameInput.fill(uniqueUsername);
  48 | 
  49 |   await page.locator('div.oxd-select-wrapper').nth(1).click();
  50 |   await page.locator('.oxd-select-dropdown').getByText('Enabled').click();
  51 | 
  52 |   const passwordInput = page.locator('div').filter({ hasText: /Password/i }).locator('input[type="password"]').first();
  53 |   const confirmPasswordInput = page.locator('div').filter({ hasText: /Confirm Password/i }).locator('input[type="password"]').first();
  54 |   await passwordInput.fill(password);
  55 |   await confirmPasswordInput.fill(password);
  56 | 
  57 |   await page.getByRole('button', { name: 'Save' }).click();
  58 | 
  59 |   await expect(page.locator('.oxd-toast')).toContainText(/success/i, { timeout: 20000 });
  60 | 
  61 |   await page.getByPlaceholder('Search').fill(uniqueUsername);
  62 |   await page.getByRole('button', { name: /search/i }).click();
  63 | 
  64 |   await expect(page.locator('div.oxd-table-card')).toContainText(uniqueUsername, { timeout: 20000 });
  65 | });
  66 | 
```