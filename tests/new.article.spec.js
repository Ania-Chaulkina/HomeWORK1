import { test, expect } from '@playwright/test';
//import { MainPage, RegisterPage, YourFeedPage, ArticleBuilder, NewArticlePage  } from '../src/pages/index';
import { UserBuilder } from '../src/helpers/user.builders';
import { App } from '../src/pages/app.page'
test('Создание статьи авторизованным пользователем', async ({page}) => {

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

    const randomArticle = new ArticleBuilder()
    .generateArticleTitle()
    .generateArticleInfo()
    .generateArticleContent()
    .generateArticleTag()
    .generate();

    await app.newArticle.open();
    await app.newArticle.newArticle(randomArticle);
    await expect(page.getByRole('button', { name: ' Delete Article' }).first()).toBeVisible();
})


