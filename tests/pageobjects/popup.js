const waitHelper = require('../../helpers/waitHelper');

class popup{
    get popupTitle(){
        return $('id:title');
    }

    get popupMessage(){
        return $('id:message');
    }

    get popupButton(){
        return $('id:buttonPositive');
    }

    async clickPopupButton() {
        await waitHelper.waitAndClick(this.popupButton);
    }

    async verifyPopup(title, message) {
        await this.popupTitle.waitForDisplayed({ timeout: 5000});
        await this.popupMessage.waitForDisplayed({ timeout: 5000});
        
        const givenTitle = await this.popupTitle.getText();
        const givenMessage = await this.popupMessage.getText();

        if (givenTitle !== title) {
            throw new Error('Expected title: "${title}", received "${givenTitle}"');
        }

        if (givenMessage !== message) {
            throw new Error('Expected message: "${message}", received "${givenMessage}"');
        }
    }
}

module.exports = new popup()
