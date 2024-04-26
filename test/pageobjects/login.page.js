const { $ } = require('@wdio/globals')
const Page = require('./page');

require('dotenv').config();

class LoginPage extends Page {
    
    get inputUsername() {
        return $('[content-desc="Username input field"]');
    }

    get inputPassword() {
        return $('[content-desc="Password input field"]');
    }

    get btnSubmit() {
        return $('[content-desc="Login button"]');
    }
    
    async login() {
        
        await this.inputUsername.setValue(process.env.USERNAME);
        await this.inputPassword.setValue(process.env.PASSWORD);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();