import { test, expect } from "@playwright/test";

test.beforeEach('navite to test url', async({page})=>{
    await page.goto("http://localhost:4200/");
    await page.getByText('Modal').click()
    await page.getByText('ToolTip').click()
})

test('tool tip test', async({page})=>{
    await page.getByRole('button', {name: 'Top'}).hover()
    const toolTip = page.locator('nb-tooltip :text("This is a tooltip")')
    await expect(toolTip).toBeVisible()
})