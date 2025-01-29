const waitHelper = require('../../helpers/waitHelper');

class pageLogin{
    get getUsername() {
        return $('id:usernameEditText');
    }

    get getPassword() {
        return $('id:passwordEditText');
    }

    get getButtonLogin(){
        return $('id:buttonLogin');
    }

    get showPassword() {
        return $('id:text_input_end_icon');
    }

    async enterUsername(username) {
        await waitHelper.waitAndClick(this.getUsername);
        await this.getUsername.setValue(username);
    }

    async enterPassword(password) {
        await waitHelper.waitAndClick(this.getPassword);
        await this.getPassword.setValue(password);
    }

    async clickButtonLogin(){
        await waitHelper.waitAndClick(this.getButtonLogin);
    }

    async clickShowPassword(){
        await waitHelper.waitAndClick(this.showPassword);
    }
}

module.exports = new pageLogin()