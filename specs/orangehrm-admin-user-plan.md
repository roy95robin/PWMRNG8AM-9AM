# OrangeHRM Admin User Creation Plan

## Application Overview

Plan for automating the creation of a new admin user in the OrangeHRM demo application using Playwright with TypeScript.

## Test Scenarios

### 1. OrangeHRM Admin User Management

**Seed:** `tests/example.spec.ts`

#### 1.1. Add a new admin user

**File:** `tests/orangehrm-admin-user.spec.ts`

**Steps:**
  1. Open the OrangeHRM login page at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    - expect: The login page is displayed with the username and password fields.
  2. Enter the username 'Admin' and password 'admin123'
    - expect: The credentials are entered into the respective fields.
  3. Click the login button
    - expect: The user is successfully logged in and the dashboard is displayed.
  4. Navigate to the Admin module from the left navigation
    - expect: The Admin page opens and the System Users screen is visible.
  5. Click the Add button in the System Users page
    - expect: The Add User dialog opens with fields for User Role, Employee Name, Username, Status, Password, and Confirm Password.
  6. Select 'Admin' as the User Role
    - expect: The Admin role is selected in the dropdown.
  7. In the Employee Name field, type the name of an existing employee and select the matching suggestion from the list
    - expect: The employee name is populated and the suggestion is accepted.
  8. Enter a unique username for the new admin user, for example a timestamp-based value such as 'qaadmin01' or 'qaadmin' plus a suffix
    - expect: The username field is populated with the unique value.
  9. Set the account status to Enabled
    - expect: The Enabled option is selected.
  10. Enter a strong password that meets the site requirements and type the same value in the Confirm Password field
    - expect: Both password fields contain the same value.
  11. Click the Save button
    - expect: The user is created successfully, a success message appears, and the new user is listed in the System Users table.
  12. Optionally verify that the newly created user appears in the table by searching for the username
    - expect: The created user is visible in the table and the role shows 'Admin'.
