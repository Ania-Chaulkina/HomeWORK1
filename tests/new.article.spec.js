import { test, expect } from '@playwright/test';
import { MainPage, RegisterPage, UserBuilder, YourFeedPage, ArticleBuilder, NewArticlePage  } from '../src/pages/index';

test('Создание статьи авторизованным пользователем', async ({page}) => {
    const mainPage = new MainPage(page);
	const registerPage = new RegisterPage(page);
    const newArticlePage = new NewArticlePage(page);
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

    const randomArticle = new ArticleBuilder()
    .generateArticleTitle()
    .generateArticleInfo()
    .generateArticleContent()
    .generateArticleTag()
    .generate();

    await newArticlePage.open();
    await newArticlePage.newArticle(randomArticle);
    await expect(page.getByRole('button', { name: ' Delete Article' }).first()).toBeVisible();
})


