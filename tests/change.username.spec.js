import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/main.page';
import { RegisterPage } from '../src/pages/register.page';
import { UserBuilder } from '../src/helpers/user.builders';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import { YourSettingsPage } from '../src/pages/yoursettings.page';

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
