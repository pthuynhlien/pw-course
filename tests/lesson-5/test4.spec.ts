import { test } from '@playwright/test';

const notes = [
    {title: "Note 1", content: "Content of note 1"},
    {title: "Note 2", content: "Content of note 2"},
    {title: "Note 3", content: "Content of note 3"},
    {title: "Note 4", content: "Content of note 4"},
    {title: "Note 5", content: "Content of note 5"},
    {title: "Note 6", content: "Content of note 6"},
    {title: "Note 7", content: "Content of note 7"},
    {title: "Note 8", content: "Content of note 8"},
    {title: "Note 9", content: "Content of note 9"},
    {title: "Note 10", content: "Content of note 10"}
  ]

test('Test 4', async ({ page }) => {
  await test.step("Open page", async () => {
    await page.goto('https://material.playwrightvn.com/');
  })

  await test.step("Click on Bài học 4: Personal notes", async () => {
    await page.locator("//a[contains(text(),'Bài học 4: Personal notes')]").click();
  })

  await test.step("Add 10 notes", async () => {
    for (const note of notes) {
      await page.locator("//input[@id='note-title']").fill(note.title);
      await page.locator("//textarea[@id='note-content']").fill(note.content);
      await page.locator("//button[@id='add-note']").click();
    }
  })

  await test.step("Search notes", async () => {
    await page.locator("//input[@id='search']").fill('Note 1');
  })

});