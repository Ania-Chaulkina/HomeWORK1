export class NewArticlePage {

    constructor(page) {
        this.page = page;
        this.articleButton = page.getByRole('link', { name: 'New Article' });
        this.articleTitle = page.getByRole('textbox', { name: 'Article Title' });
        this.aboutArticle = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.yourArticle = page.getByRole('textbox', { name: 'Write your article (in' });
        this.tags = page.getByRole('textbox', { name: 'Enter tags' });
        this.publicationArticleButton = page.getByRole('button', { name: 'Publish Article' });
    }

    async open() {
        await this.page.goto('https://realworld.qa.guru/#/editor');
    }

    async newArticle(randomArticle) {
        const { title, aboutInfo, content, tag } = randomArticle;
        await this.articleTitle.click();
        await this.articleTitle.fill(title);
        await this.aboutArticle.click();
        await this.aboutArticle.fill(aboutInfo); 
        await this.yourArticle.click();
        await this.yourArticle.fill(content);
        await this.tags.click();
        await this.tags.fill(tag);
        await this.publicationArticleButton.click();
    }
}