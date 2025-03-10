# Sample UI test using Playwright

### Presention
https://docs.google.com/presentation/d/1cpwwvJqrINbOBUkeQBGbtY3-dDUbV08Sji2JK2whrKE/edit?usp=sharing

### Run test in Chrome
npx playwright test --project=chromium

### Run test on all browsers (Chrome, Firefox, Safari)
npx playwright test

### View test report
npx playwright show-report

## Test case
* Test Scenario: Test Scenario: Verify an error message is displayed when the user puts invalid credentials.
* Test Steps:
  1. Launch instructure.com in a browser 
  2. From MainHome navigation bar, tap the 'Log In' expendable menu, and then tap 'Canvas' menu.
  3. Select 'Canvas Network' from the 'Canvas Account Log In' screen
  4. On the 'Canvas Network' panel, enter the invalid credential.
  5. Click 'Login' button.
  6. Assert an error message is displayed.
* Prerequisites: None
* Test Data: Invalid credential
* Expected Results: When invalid credential is entered, the web displays error message saying 'Please verify your username or password and try again'
* Test Status: Pass


