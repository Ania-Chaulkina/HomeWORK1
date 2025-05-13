export class YourSettingsPage {
    constructor(page) {
        this.page = page;
        this.profileButton = page.locator('li>div[class="nav-link dropdown-toggle cursor-pointer"]');
        this.settingsButton = page.getByRole('link', { name: ' Settings' });
        this.upDateUrl = page.getByRole('textbox', { name: 'URL of profile picture' });
        this.upDateUserName = page.getByRole('textbox', { name: 'Your Name' });
        this.upDateAboutYou = page.getByRole('textbox', { name: 'Short bio about you' });
        this.upDateEmail = page.getByRole('textbox', { name: 'Email' });
        this.upDatePass = page.getByRole('textbox', { name: 'Password' });
        this.upDateSettingsButton = page.getByRole('button', { name: 'Update Settings' });
    }

    async open() {
        await this.page.goto('https://realworld.qa.guru/#/settings');
    }

    async changeUserName(randomUser) {
        const {username} = randomUser;
        await this.upDateUserName.click();
        await this.upDateUserName.fill(username);
        await this.upDateSettingsButton.click();
    }

    async changeEmail(randomUser) {
        const {email} = randomUser;
        await this.upDateEmail.click();
        await this.upDateEmail.fill(email);
        await this.upDateSettingsButton.click();
    }

    async changePass(randomUser) {
        const {password} = randomUser;
        await this.upDatePass.click();
        await this.upDatePass.fill(password);
        await this.upDateSettingsButton.click();
    }
}