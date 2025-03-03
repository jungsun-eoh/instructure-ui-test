# Sample UI test using Playwright

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


