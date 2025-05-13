import { test, expect } from '@playwright/test';
import { MainPage, RegisterPage, YourFeedPage, GlobalFeedPage } from '../src/pages/index';
import { UserBuilder } from '../src/helpers/user.builders';
import { App } from '../src/pages/app.page'

test('Проставить лайк статье из раздела Global Feed', async ({page}) => {
    const randomUser = new UserBuilder()
        .addEmail()
        .addPassword()
        .addUsername()
        .generate();

    let app = new App(page);
    await app.main.open();
    await app.main.gotoLogin();
    await app.register.signUp(randomUser);
    await expect(app.yourFeed.profileNameField).toContainText(randomUser.username);

    await app.globalFeed.open();
    await app.globalFeed.likePost();
    await expect(page.getByRole('button', { name: ' ( 1 )' })).toBeVisible();
})