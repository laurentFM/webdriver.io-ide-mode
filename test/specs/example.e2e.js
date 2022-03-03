describe('Edge ie mode', () => {
    it('should load Edge in ie compatibility mode', async () => {
        await browser.url(`https://webdriver.io/`);
        await expect(browser).toHaveUrl('https://webdriver.io/')
    });
});

