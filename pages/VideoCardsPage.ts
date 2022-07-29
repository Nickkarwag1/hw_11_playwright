import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";

export class VideoCardsPage extends BasePage {
    private chapterName: string = "video";
    private nvidiaCards: string = "[title='nvidia']";
    private gamingProCards: string = "a[href*='obzor-palit-geforce-rtx-3070-gamingpro-oc']";

    constructor(page: Page) {
        super(page);
    }

    public async visitVideoCards() {
        await this.visitPage(this.chapterName);
    }

    public async clickNvidiaCards() {
        await this.page.locator(this.nvidiaCards).click();
    }

    public async clickCardsGamingPro() {
        const elem = await this.page.locator(this.gamingProCards);
        await elem.scrollIntoViewIfNeeded();
        await elem.click();
    }
}
