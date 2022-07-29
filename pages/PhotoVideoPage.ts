import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";

export class PhotoVideoPage extends BasePage {
    private chapterName: string = "digital";
    private videoCams: string = "div.sidebar-chunk.submenu a[href$='vidiocams']";

    constructor(page: Page) {
        super(page);
    }

    public async visitDigital() {
        await this.visitPage(this.chapterName);
    }

    public async clickVideoCams() {
        await this.page.locator(this.videoCams).click();
    }
}
