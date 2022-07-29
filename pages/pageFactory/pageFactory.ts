import { BasePage } from "../BasePage";
import { Page } from "@playwright/test";
import { NotebooksPage } from "../NotebooksPage";
import { PhonePage } from "../PhonePage";
import { PhotoVideoPage } from "../PhotoVideoPage";
import { TabletsPage } from "../TabletsPage";
import { VideoCardsPage } from "../VideoCardsPage";

export class PageFactory {
    static getPage(page: Page, pageName?: string) {
        switch (pageName) {
            case "BasePage":
                return new BasePage(page);
            case "Notebooks":
                return new NotebooksPage(page);
            case "Phone":
                return new PhonePage(page);
            case "Photo":
                return new PhotoVideoPage(page);
            case "Tablets":
                return new TabletsPage(page);
            case "VideoCards":
                return new VideoCardsPage(page);
            default:
                return new BasePage(page);
        }
    }
}
