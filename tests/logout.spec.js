import { test, expect } from '@playwright/test';
//import { MainPage, RegisterPage, YourFeedPage, ArticleBuilder, NewArticlePage  } from '../src/pages/index';
import { UserBuilder } from '../src/helpers/user.builders';
import { App } from '../src/pages/app.page'

test.only('Выход из учетной записи юзера', async ({page}) => {
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

    await app.navigation.clickLogoutButton();
    await expect(page.getByRole('link', { name: ' Login' })).toBeVisible();
})