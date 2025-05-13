import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/main.page';

test('Фильтрация статей по популярному тэгу', async ({page}) => {
    const mainPage = new MainPage(page);

    await mainPage.open();
    await mainPage.popularTagButtonClick();
    await expect(page.getByRole('button', { name: ' реклама' })).toBeVisible();
})