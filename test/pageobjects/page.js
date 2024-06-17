const { $ } = require('@wdio/globals');

module.exports = class Page {
    async open(path) {
        try {
            const contentView = $('[resource-id="android:id/content"]');
            const menuButton = $('[content-desc="open menu"]');
            await menuButton.click();

            const loginOption = $('[content-desc="menu item log in"]');
            await loginOption.click();

            //const loginText = $('android.widget.TextView*=Login'); // Busca cualquier TextView que contenga "Login" en el texto
            //await loginText.waitForExist(); // Espera a que el elemento aparezca en la página
        } catch (error) {
            console.error('Error while finding the element:', error);
        }
    }
};