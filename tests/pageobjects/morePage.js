const waitHelper = require('../../helpers/waitHelper');

class morePage{
    get viewProfile(){
        return $('id:cardViewProfile');
    }

    async clickViewProfile(){
        await waitHelper.waitAndClick(this.viewProfile);
    }
}

module.exports = new morePage();