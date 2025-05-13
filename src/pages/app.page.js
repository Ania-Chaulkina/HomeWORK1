import { MainPage, RegisterPage, GlobalFeedPage, NavigationPage, NewArticlePage, YourFeedPage, YourSettingsPage } from './index';

export class App {
	constructor(page) {
		this.page = page;
		this.main = new MainPage(page);
		this.register = new RegisterPage(page);
		this.yourFeed = new YourFeedPage(page);
        this.globalFeed = new GlobalFeedPage(page);
        this.navigation = new NavigationPage(page);
        this.newArticle = new NewArticlePage(page);
        this.yourSettings = new YourSettingsPage(page);
	}
}