import { test, expect } from '@playwright/test';
import { MainPage, RegisterPage, YourFeedPage, GlobalFeedPage } from '../src/pages/index';
import { UserBuilder } from '../src/helpers/user.builders';

test.only('Проставить лайк статье из раздела Global Feed', async ({page}) => {
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

    const globalFeedPage = new GlobalFeedPage(page);
    await globalFeedPage.open();
    await globalFeedPage.likePost();
    await expect(page.getByRole('button', { name: ' ( 1 )' })).toBeVisible();
})