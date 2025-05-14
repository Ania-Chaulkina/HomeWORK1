export class MainPage {
    constructor (page) {
        this.page = page;
        this.signUpButtom = page.getByRole('link', { name: 'Sign up' });
        this.popularTags = page.getByRole('button', { name: 'реклама' });
        this.loginButton = page.getByRole('link', { name: ' Login' });
    }
    async open() {
        await this.page.goto('https://realworld.qa.guru/');
    }
    
    async gotoSignUp() {
        await this.signUpButtom.click();
    }

    async gotoLogin() {
        await this.loginButton.click();
    }

    async popularTagButtonClick() {
        await this.popularTags.first().click();
    }; 
}

