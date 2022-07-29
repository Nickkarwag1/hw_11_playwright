import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";

export class NotebooksPage extends BasePage {
    private chapterName: string = "mobile";
    private notebooks: string = "[title='ноутбуки']";
    private gamingNote: string = "a[href*='itogi-2020-goda-igrovie-noutbuki']";

    constructor(page: Page) {
        super(page);
    }

    public async visitNotebooks() {
        await this.visitPage(this.chapterName);
    }

    public async clickNotebooks() {
        await this.page.locator(this.notebooks).click();
    }

    public async clickGamingNote() {
        const elem = await this.page.locator(this.gamingNote);
        await elem.scrollIntoViewIfNeeded();
        await elem.click();
    }
}
