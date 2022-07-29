import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";

export class TabletsPage extends BasePage {
    private chapterName: string = "tablets";
    private smartWatch: string = "a[href*='smartchasi-watch-3-pro-2022']";

    constructor(page: Page) {
        super(page);
    }

    public async visitTablets() {
        await this.visitPage(this.chapterName);
    }

    public async clickSmartWatch() {
        await this.page.locator(this.smartWatch).click();
    }
}
