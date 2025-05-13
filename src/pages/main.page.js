export class MainPage {
    constructor (page) {
        this.page = page;
        this.signUpButtom = page.getByRole('link', { name: 'Sign up' });
        this.popularTags = page.getByRole('button', { name: 'реклама' });
    }
    async open() {
        await this.page.goto('https://realworld.qa.guru/');
    }
    
    async gotoLogin() {
        await this.signUpButtom.click();
    }

    async popularTagButtonClick() {
        await this.popularTags.first().click();
    }; 
}

