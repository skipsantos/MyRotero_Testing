import pageLogin from '../pageobjects/pageLogin.js';
import popup from '../pageobjects/popup.js';
import loginLoading from '../pageobjects/loginLoading.js';
import homeScreen from '../pageobjects/homeScreen.js';
import morePage from '../pageobjects/morePage.js';
import profilePage from '../pageobjects/profilePage.js';
const username = 'Test+User1@mysuki.io';
const password = 'P@ssw0rdtest';

// describe('No Internet Test', () => {
//     it('disable internet and fail the login, afterwards re-enable and login successfully', async () => {

//         // Turn off the internet and data
//         await driver.setNetworkConnection(0);
//         await driver.pause(3000);

//         // Verify app is running
//         const appState = await driver.queryAppState("com.mysuki.myrotero");
//         if (appState !== 4) {
//             throw new Error("App is not running");
//         }

//         // Enter login details and attempt login
//         await pageLogin.enterUsername(username);
//         await pageLogin.enterPassword(password);

//         // Collapse keyboard before clicking the login button
//         if (await driver.isKeyboardShown()) {
//             await driver.hideKeyboard();
//         }
        
//         await pageLogin.clickButtonLogin(); 
        
//         // Ensure the internet error pops up
//         let expectedTitle = "No Internet Connection";
//         let expectedMessage = "Please check your internet connection and try again.";
//         await popup.verifyPopup(expectedTitle, expectedMessage);
//         await popup.clickPopupButton();

//         // Turn internet back on
//         await driver.setNetworkConnection(6);
//         await driver.pause(6000);
//         await pageLogin.clickButtonLogin(); 

//         // Validate loading screen
//         let logoutTitle = "Confirm Sign Out";
//         let logoutMessage = "Are you sure you want to sign out? Any unsaved changes will be lost.";

//         for (let i = 0; i < 15; i++) {
//             await driver.pause(10000);
//             await driver.queryAppState("com.mysuki.myrotero") == 4
//         }

//         await homeScreen.actionBar.isDisplayed();

//         // Navigate to logout
//         await homeScreen.clickMoreNavigation();
//         await morePage.clickViewProfile();
//         await profilePage.clickButtonLogout()


//         await popup.verifyPopup(logoutTitle, logoutMessage);
//         await popup.clickPopupButton();
//     })
// })

// describe('Login with empty fields', () => {
//     it('attempt to login with empty fields, ', async () => {

//         // Verify app is running
//         const appState = await driver.queryAppState("com.mysuki.myrotero");
//         if (appState !== 4) {
//             throw new Error("App is not running");
//         }

//         // Clear login details and attempt login
//         await pageLogin.enterUsername("");
//         await pageLogin.enterPassword("");

//         // Collapse keyboard before clicking the login button
//         if (await driver.isKeyboardShown()) {
//             await driver.hideKeyboard();
//         }
        
//         await pageLogin.clickButtonLogin(); 
        
//         // Ensure the internet error pops up
//         let expectedTitle = "Login Failed";
//         let expectedMessage = "The username or password you entered is incorrect. Please try again.";
//         await popup.verifyPopup(expectedTitle, expectedMessage);

//         await driver.pause(1000);

//         // Verify toast message
//         let toastMessage = "Empty email or empty password" 
//         let toast = await $('//android.widget.Toast');
//         let text = await toast.getText();
//         expect(text).toContain(toastMessage);

//         await popup.clickPopupButton();
//     })
// })

// describe('Login with invalid user', () => {
//     it('attempt to login with an invalid user, ', async () => {

//         let incorrectUsername = "test@gmail.com";
//         let incorrectPassword = "password"

//         // Verify app is running
//         const appState = await driver.queryAppState("com.mysuki.myrotero");
//         if (appState !== 4) {
//             throw new Error("App is not running");
//         }

//         // Clear login details and attempt login
//         await pageLogin.enterUsername(incorrectUsername);
//         await pageLogin.enterPassword(incorrectPassword);

//         // Collapse keyboard before clicking the login button
//         if (await driver.isKeyboardShown()) {
//             await driver.hideKeyboard();
//         }
        
//         await pageLogin.clickButtonLogin(); 
        
//         // Ensure the internet error pops up
//         let expectedTitle = "Login Failed";
//         let expectedMessage = "The username or password you entered is incorrect. Please try again.";
//         await popup.verifyPopup(expectedTitle, expectedMessage);

//         await driver.pause(1000);

//         // Verify toast message
//         let toastMessage = "Password mismatch"
//         let toast = await $('//android.widget.Toast');
//         let text = await toast.getText();
//         expect(text).toContain(toastMessage);

//         await popup.clickPopupButton();
//     })
// })

describe('Login with password visible', () => {
    it('login with visible password', async () => {

        // Verify app is running
        const appState = await driver.queryAppState("com.mysuki.myrotero");
        if (appState !== 4) {
            throw new Error("App is not running");
        }

        // Enter login details and attempt login
        await pageLogin.enterUsername(username);
        await pageLogin.enterPassword(password);

        // Collapse keyboard before clicking the login button
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        
        await pageLogin.clickShowPassword();

        await driver.pause(500);

        let isMasked = await pageLogin.getPassword.getAttribute("password");

        expect (!isMasked)
        expect(pageLogin.getPassword.getText() == password)

        await pageLogin.clickButtonLogin(); 
        
        for (let i = 0; i < 15; i++) {
            await driver.pause(10000);
            await driver.queryAppState("com.mysuki.myrotero") == 4
        }

        await homeScreen.actionBar.isDisplayed();

        let logoutTitle = "Confirm Sign Out";
        let logoutMessage = "Are you sure you want to sign out? Any unsaved changes will be lost.";

        // Navigate to logout
        await homeScreen.clickMoreNavigation();
        await morePage.clickViewProfile();
        await profilePage.clickButtonLogout()

        await popup.verifyPopup(logoutTitle, logoutMessage);
        await popup.clickPopupButton();
    })
})

describe('Valid Login (Happy Case)', () => {
    it('should login successfully then logout', async () => {

        // Verify app is running
        const appState = await driver.queryAppState("com.mysuki.myrotero");
        if (appState !== 4) {
            throw new Error("App is not running");
        }

        // Enter login details and attempt login
        await pageLogin.enterUsername(username);
        await pageLogin.enterPassword(password);

        // Collapse keyboard before clicking the login button
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        
        await pageLogin.clickShowPassword();

        await driver.pause(500);

        let isMasked = await pageLogin.getPassword.getAttribute("password");

        expect (!isMasked)
        expect(pageLogin.getPassword.getText() == password)

        await pageLogin.clickButtonLogin(); 
        
        for (let i = 0; i < 15; i++) {
            await driver.pause(10000);
            await driver.queryAppState("com.mysuki.myrotero") == 4
        }

        await homeScreen.actionBar.isDisplayed();

        let logoutTitle = "Confirm Sign Out";
        let logoutMessage = "Are you sure you want to sign out? Any unsaved changes will be lost.";

        // Navigate to logout
        await homeScreen.clickMoreNavigation();
        await morePage.clickViewProfile();
        await profilePage.clickButtonLogout()

        await popup.verifyPopup(logoutTitle, logoutMessage);
        await popup.clickPopupButton();
    })
})
