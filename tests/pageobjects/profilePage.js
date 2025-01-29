const waitHelper = require('../../helpers/waitHelper');

class profilePage {
    get buttonLogout() {
        return $('id:buttonLogout');
    }

    async clickButtonLogout() {
        await waitHelper.waitAndClick(this.buttonLogout);
    }
}

module.exports = new profilePage();