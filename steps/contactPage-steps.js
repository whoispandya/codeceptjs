const { I, contactPage } = inject();

Given('I visit bluescape contact Page', () => {
    contactPage.goto()
})

When('I enter my Name as {string}', (name) => {
    contactPage.enterName(name);
})

When('I enter my website as {string}', (website) => {
  contactPage.enterWebsite(website);
})

When('I enter my email as {string}', (email) => {
    contactPage.enterEmail(email);
})

When('I submit my contact data', () => {
    contactPage.clickSubmit();
})

When('I select Todays date', () => {
    contactPage.selectDate();
})

Then('I should see my Name as {string} on confirmation Page', (name) => {
    contactPage.verifyName(name);
})

Then('I should see my email as {string} on confirmation Page', (email) => {
    contactPage.verifyEmail(email);
})

Then('I should see my website as {string} on confirmation Page', (website) => {
    contactPage.verifyWebsite(website);
})
Then('I should see Todays date on confirmation Page', () => {
    contactPage.verifyDate();
})

