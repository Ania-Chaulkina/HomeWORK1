export class NavigationPage {
    constructor(page) {
        this.page = page;

        this.homeButton = page.getByRole('button', { name: 'Home' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
        this.paginationButton = page.getByRole('button', { name: 'Page 2' });
        this.lastpainationButton = page.getByRole('button', { name: 'Previous page' });
        this.profileButton = page.locator('li>div[class="nav-link dropdown-toggle cursor-pointer"]');
        this.logoutButton = page.getByRole('link', { name: ' Logout' });
        this.newArticleButton = page.getByRole('button', { name: 'New Article' }); 
        }
        

    async clickLoginButton() {
        await this.loginButton.click()
    }

    async clickSighUpButton() {
        await this.signUpButton.click()
    }

    async clickPaginationButton() {
        await this.paginationButton.click()
    }

    async clickLastPaginationButton() {
        await this.lastpainationButton.click()
    }

    async clickProfileButton() {
        await this.profileButton.click()
    }

    async clickLogoutButton() {
        await this.profileButton.click()
        await this.logoutButton.click()
    }

    async clickNewArticleButton() {
        this.newArticleButton.click()
    }
}
