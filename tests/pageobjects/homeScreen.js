const waitHelper = require('../../helpers/waitHelper');
class homeScreen{
    get actionBar() {
        return $('id:action_bar');
    }
    
    get homeText() {
        return $("//android.widget.TextView[@text='Home'])[1]");
    }

    get imageViewNoProducts() {
        return $('id:imageViewNoProducts');
    }

    get textViewNoProducts() {
        return $('id:textViewNoProducts');
    }

    get moreNavigation() {
        return $('id:navigation_more');
    }

    async clickMoreNavigation() {
        await waitHelper.waitAndClick(this.moreNavigation);
    }

    

}

module.exports = new homeScreen()
