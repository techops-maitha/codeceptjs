const { I } = inject();
const components = {
    title: '~Ajustes',
    geral: '~Geral',
    find: '~Buscar'
}
module.exports = {
    checkTitle() {
        I.waitForVisible(components.title, 5)
    },
    clickInMenu(menu) {
        I.click(menu)
    },
    find(text) {
        I.waitForElement(components.find, 5)
        I.fillField(components.find, text)
    }
}
