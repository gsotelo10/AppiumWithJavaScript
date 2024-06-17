import CommonsScreen from './CommonsScreen.js'
import testData from '../data/testData'
//require('dotenv').config();

const ELEMENTS = {
    USERNAME_INPUT: '//android.widget.EditText[@content-desc="Username input field"]',
    PASSWORD_INPUT: '~Password input field',
    LOGIN_BUTTON: '~Login button'
    
}

class LoginScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    async tapOnLogin () {
        await this.clickOnMenuOption()
        await this.clickOnLoginOption()
    }

    async login() {
        const username = testData.credentials.validUser
        const password = testData.credentials.validPassword

        await this.elementDisplayed(ELEMENTS.USERNAME_INPUT)
        await this.elementDisplayed(ELEMENTS.PASSWORD_INPUT)

        await this.sendText(ELEMENTS.USERNAME_INPUT, username)
        await this.sendText(ELEMENTS.PASSWORD_INPUT, password)
        await this.elementTap(ELEMENTS.LOGIN_BUTTON)
        await this.principalContentView()
       
    }

}

export default new LoginScreen()