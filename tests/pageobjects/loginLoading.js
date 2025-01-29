const waitHelper = require('../../helpers/waitHelper');
class loginLoading{
    get loadingBackground(){
        return $('id:background');
    }

    get loadingLabel(){
        return $('id:label');
    }

    get loadingDetailsLabel(){
        return $('id:details_label');
    }

    async verifyLoading(label, detailsLabel) {
        await this.loadingBackground.waitForDisplayed({ timeout: 5000});
        await this.label.waitForDisplayed({ timeout: 5000});
        await this.detailsLabel.waitForDisplayed({ timeout: 5000});

        const givenLabel = await this.loadingLabel.getText();
        const givenDetailsLabel = await this.loadingDetailsLabel.getText();

        if (!this.loadingBackground.isElementDisplayed()) {
            throw new Error('Loading background not displayed')
        }

        if (givenLabel !== label) {
            throw new Error('Expected label: "${label}", received "${givenLabel}"');
        }

        if (givenDetailsLabel !== detailsLabel) {
            throw new Error('Expected details label: "${detailsLabel}", received "${givenDetailsLabel}"');
        }
    }
}

module.exports = new loginLoading()
