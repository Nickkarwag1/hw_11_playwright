import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";

export class PhonePage extends BasePage {
    private chapterName: string = "phone";
    private smartphone: string = "div.sidebar-chunk.submenu a[href$='smartphone']";

    constructor(page: Page) {
        super(page);
    }

    public async visitPhone() {
        await this.visitPage(this.chapterName);
    }

    public async clickSmartPhone() {
        await this.page.locator(this.smartphone).click();
    }
}
