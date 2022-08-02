import { test, expect } from "@playwright/test";
import { VideoCardsPage } from "../pages/VideoCardsPage";
import { NotebooksPage } from "../pages/NotebooksPage";
import { TabletsPage } from "../pages/TabletsPage";
import { PhonePage } from "../pages/PhonePage";
import { PhotoVideoPage } from "../pages/PhotoVideoPage";
import { PageFactory } from "../pages/pageFactory/pageFactory";
import { EXPECTED_VALUE } from "../helpers/expectedValue";
import { logger } from "../logger/winston";

const { NVIDIA, GAMING_NOTEBOOKS, NOTEBOOK, GAMING_PRO, WATCH_3_PRO, SMARTPHONES, DIGITAL } = EXPECTED_VALUE;

test.describe("Tests wedsite 3dnews.ru", async () => {
    test("Video cards test", async ({ page }) => {
        logger.info("Video cards test");
        const videoCards = PageFactory.getPage(page, "VideoCards") as VideoCardsPage;
        await videoCards.visitVideoCards();
        await videoCards.clickNvidiaCards();
        await expect(page).toHaveURL(NVIDIA);
        await videoCards.clickCardsGamingPro();
        const textCurrentPage = await videoCards.getTextHeader();
        expect(textCurrentPage).toContain(GAMING_PRO);
    });
    test("Notebooks test", async ({ page }) => {
        logger.info("Notebooks test");
        const notebooks = PageFactory.getPage(page, "Notebooks") as NotebooksPage;
        await notebooks.visitNotebooks();
        await notebooks.clickNotebooks();
        const urlNotebooks = await notebooks.getUrl();
        expect(urlNotebooks).toContain(NOTEBOOK);
        await notebooks.clickGamingNote();
        const urlGamingNote = await notebooks.getUrl();
        expect(urlGamingNote).toContain(GAMING_NOTEBOOKS);
    });
    test("Tablets test", async ({ page }) => {
        logger.info("Tablets test");
        const tablets = PageFactory.getPage(page, "Tablets") as TabletsPage;
        await tablets.visitTablets();
        await tablets.clickSmartWatch();
        const textCurrentPage = await tablets.getTextHeader();
        expect(textCurrentPage).toContain(WATCH_3_PRO);
    });
    test("Phone test", async ({ page }) => {
        logger.info("Phone test");
        const phone = PageFactory.getPage(page, "Phone") as PhonePage;
        await phone.visitPhone();
        await phone.clickSmartPhone();
        await expect(page).toHaveTitle(SMARTPHONES);
    });
    test("Photo and Video test", async ({ page }) => {
        logger.info("Photo and Video test");
        const digital = PageFactory.getPage(page, "Photo") as PhotoVideoPage;
        await digital.visitDigital();
        await digital.clickVideoCams();
        await expect(page).toHaveTitle(DIGITAL);
    });
});
