import { DEFAULT_TIMEOUT, CONTEXT_REF } from '../utils/contstans'


export default class BaseScreen {

    constructor (selector) {
        this.selector = selector
    }

    /**
     * Waits for an specific element and clicks on in when displayed
     *
     * @param {selector} selector
     */
    async elementTap (selector) {
        await this.waitForElement(selector)
        const element = await this.find(selector)
        await element.click()
    }

    /**
     * Wait an element to be visible
     *
     * @param {selector} selector
     * @return {boolean}
     */

    async elementDisplayed (selector) {
        const element = await this.find(selector)
        try {
            await this.waitForElement(selector)
            return element.isDisplayed()
        } catch (error) {
            return false
        }
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {selector} selector
     */

    async waitForElement (selector) {
        const element = await this.find(selector)
        return element.waitForDisplayed(DEFAULT_TIMEOUT)
    }

     /**
     * Find and return the expected element if available
     *
     * @param {selector} selector
     * @return {element}
     */


    async find (selector) {
        return $(selector)
    }

     /**
     * Finds the required element and type text in it if available
     *
     * @param {selector} selector
     * @param {text} text
     */

    async sendText (selector, text) {
        const element = await this.find(selector)
        await this.waitForElement(selector)
        //await element.clearValue()
        await element.setValue(text)
        await driver.pause(350)   
    }
}