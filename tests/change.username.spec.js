import { test, expect } from '@playwright/test';
import { MainPage, RegisterPage, YourFeedPage , YourSettingsPage } from '../src/pages/index';
import { UserBuilder } from '../src/helpers/user.builders';

test('Смена имени юзера', async ({page}) => {
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    const yourFeedPage = new YourFeedPage(page);
    const yourSettingsPage = new YourSettingsPage(page);
    const randomUser = new UserBuilder()
        .addEmail()
        .addPassword()
        .addUsername()
        .generate();

    await mainPage.open();
    await mainPage.gotoLogin();
    await registerPage.signUp(randomUser);
    await expect(yourFeedPage.profileNameField).toContainText(randomUser.username);

    await yourSettingsPage.open();
    await yourSettingsPage.changeUserName(randomUser);
    await expect(page.getByRole('navigation')).toContainText(randomUser.username);
})
