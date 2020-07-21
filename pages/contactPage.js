const chai = require('chai');
const assert = chai.assert;
const I = actor();
const dateSelector = '.ui-datepicker-today .ui-state-default';

module.exports = {
    clickSubmit(){
        I.click('.contact-submit');
    },

    goto(){
        I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
    },

    enterName(name){
        I.fillField('Name',name);
    },

    enterEmail(email){
        I.fillField('Email',email);
    },

    enterWebsite(website){
        I.fillField('Website',website);
    },

    selectDate(){
        I.click('.jp-contact-form-date');
        I.waitForElement(dateSelector,20);
        I.click(dateSelector);
    },

    clickSubmit(){
        I.click('button[type=submit]');
        I.waitForNavigation();
        I.waitForText('Message Sent',30);
    },

    async verifyName(name) {
        let data = await I.grabTextFrom('#contact-form-7 > blockquote > p:nth-child(1)');
        assert.equal('Name: ' + name, data.trim());
    },

    async verifyEmail(email){
        let data =  await I.grabTextFrom('#contact-form-7 > blockquote > p:nth-child(2)');
        assert.equal('Email: ' + email, data.trim());
    },

    async verifyWebsite(website){
        let data =  await I.grabTextFrom('#contact-form-7 > blockquote > p:nth-child(3)');
        assert.equal('Website: ' + website, data.trim());
    },

    async verifyDate(){
        let data =  await I.grabTextFrom('#contact-form-7 > blockquote > p:nth-child(4)');
        assert.equal('Date: ' +  this.getDateFormatted(), data.trim());
    },

    getDateFormatted(){
        var date = new Date();
        var month = date.toLocaleString("en-us", { month: "long" });
        var day = date.getDate();
        var year = date.getFullYear();
        return month + ' ' + day +', ' + year;
    }

}