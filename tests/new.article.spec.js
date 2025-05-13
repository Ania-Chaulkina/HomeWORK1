import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/main.page';
import { RegisterPage } from '../src/pages/register.page';
import { UserBuilder } from '../src/helpers/user.builders';
import { ArticleBuilder } from '../src/helpers/article.builders';
import { NewArticlePage } from '../src/pages/new.article.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';

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


