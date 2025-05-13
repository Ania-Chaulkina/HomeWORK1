import { test, expect } from '@playwright/test';
import { MainPage, RegisterPage, UserBuilder, YourFeedPage, NavigationPage } from '../src/pages/index';

test('Выход из учетной записи юзера', async ({page}) => {
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    const yourFeedPage = new YourFeedPage(page);
    const randomUser = new UserBuilder()
        .addEmail()
        .addPassword()
        .addUsername()
        .generate();

    await mainPage.open();
    await mainPage.gotoLogin();
    await registerPage.signUp(randomUser);
    await expect(yourFeedPage.profileNameField).toContainText(randomUser.username);

    const navigationPage = new NavigationPage(page);

    await navigationPage.clickLogoutButton();
    await expect(page.getByRole('link', { name: ' Login' })).toBeVisible();
})