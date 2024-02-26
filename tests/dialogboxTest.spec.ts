import { test, expect } from "@playwright/test";

test.beforeEach('navite to test url', async({page})=>{
    await page.goto("http://localhost:4200/");
    await page.getByText('Tables').click()
    await page.getByText('Smart Table').click()
})

test('tool tip test', async({page})=>{
    //browser dialog box traversed upwords, so I declare browser pop up accept/reject and then click on delete button
    page.on('dialog', dialog => {
        dialog.accept();
    })
    await page.locator('table tr td .ng2-smart-action-delete-delete').first().click()
})