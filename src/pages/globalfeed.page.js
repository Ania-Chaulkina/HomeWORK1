export class GlobalFeedPage {
	constructor(page) {
		this.page = page;
		this.globalFeedPage = page.getByRole('button', { name: 'Global Feed' });
        this.likePostButton = page.getByRole('button', { name: ' ( 0 )' });
	}
    async open() {
        await this.globalFeedPage.click();
    }

    async likePost() {
        await this.likePostButton.first().click();
    }
}