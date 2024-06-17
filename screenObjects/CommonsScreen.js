import BaseScreen from './BaseScreen'


const ELEMENTS = {
    MENU_PRINCIPAL_VIEW: '//android.widget.FrameLayout[@resource-id="android:id/content"]',
    MENU_BUTTON: '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView',
    MENU_OPTIONS: '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup',
    LOGIN_OPTION: '~menu item log in',
    VIEW_LOGIN: '//android.widget.ScrollView/android.view.ViewGroup'
}


export default class CommonsScreen extends BaseScreen {
    constructor () {
        super(ELEMENTS)
    }

    async clickOnMenuOption () {
        await this.elementTap(ELEMENTS.MENU_BUTTON)
        await this.elementDisplayed(ELEMENTS.MENU_OPTIONS)
        
    }

    async clickOnLoginOption (){
        await this.elementDisplayed(ELEMENTS.LOGIN_OPTION)
        await this.elementTap(ELEMENTS.LOGIN_OPTION)
        await this.elementDisplayed(ELEMENTS.VIEW_LOGIN)
    }

    async principalContentView (){
        await this.elementDisplayed(ELEMENTS.MENU_PRINCIPAL_VIEW)
    }
}



