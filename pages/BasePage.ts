import { Page } from "@playwright/test";

export class BasePage {
    protected page;
    private textHeader: string = "//h1[@itemprop='headline']";

    constructor(page: Page) {
        this.page = page;
    }

    async visitPage(chapter: string) {
        await this.page.goto(`/${chapter}`);
    }

    async getUrl() {
        return this.page.url();
    }

    async getTextHeader() {
        return this.page.innerText(this.textHeader);
    }
}
