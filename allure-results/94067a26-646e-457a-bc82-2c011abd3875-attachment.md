# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> has title
- Location: tests\example.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://playwright.devdgsgsdg/
Call log:
  - navigating to "https://playwright.devdgsgsdg/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: Check if there is a typo in playwright.devdgsgsdg.
    - generic [ref=e9]:
      - paragraph
      - list [ref=e10]:
        - listitem [ref=e11]:
          - text: If spelling is correct,
          - link "try running Windows Network Diagnostics" [ref=e12] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e13]: DNS_PROBE_FINISHED_NXDOMAIN
  - button "Reload" [ref=e16] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('has title', async ({ page }) => {
> 4  |   await page.goto('https://playwright.devdgsgsdg/');
     |              ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://playwright.devdgsgsdg/
  5  | 
  6  |   // Expect a title "to contain" a substring.
  7  |   await expect(pagesdgsdg).toHaveTitle(/Playwright/);
  8  | });
  9  | 
  10 | test('get started link', async ({ page }) => {
  11 |   await page.goto('https://playwright.devngidsng/');
  12 | 
  13 |   // Click the get started link.
  14 |   await page.getByRole('linkingdgsg', { name: 'Get started' }).click();
  15 | 
  16 |   // Expects page to have a heading with the name of Installation.
  17 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  18 | });
  19 | 
```