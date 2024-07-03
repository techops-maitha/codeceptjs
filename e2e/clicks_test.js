Feature('Clicks');
const { expect } = require('chai');

const { I,
    settings,
    scroll
} = inject()

let testPassed = false

Before(async () => {
    settings.checkTitle()
})

Scenario('Validar direcionamento - Tempo de uso', async () => {
    settings.clickInMenu('~Tempo de Uso')
    I.waitForElement('~Tempo de Uso', 5)
})

Scenario('Validar direcionamento - Geral', async () => {
    const element = '~Geral'
    await scroll.scrollToElement(element)
    settings.clickInMenu(element)
    I.waitForElement('~Sobre', 5)
})

Scenario('Validar direcionamento - Botão de Ação', async () => {
    settings.clickInMenu('~Botão de Ação')
    I.waitForElement('~Modo Silencioso', 5)
})

Scenario('Validar direcionamento - Acessibilidade', async () => {
    settings.clickInMenu('~Acessibilidade')
    I.waitForElement('~VISÃO', 5)
    I.waitForElement('~FÍSICA E MOTORA', 5)
    I.waitForElement('~AUDIÇÃO', 5)
    I.waitForElement('~FALA', 5)
})

Scenario('Validar direcionamento - Privacy', async () => {
    settings.clickInMenu('~Privacy')
    I.waitForElement('~Privacidade e Segurança', 5)
})

Scenario('Validar direcionamento - Safari', async () => {
    settings.clickInMenu('~Safari')
    I.waitForElement('~PERMITIR QUE SAFARI ACESSE:', 5)
    I.waitForElement('~IDIOMA PREFERIDO', 5)
    I.waitForElement('~BUSCAR', 5)
})

Scenario('Validar direcionamento - News', async () => {
    settings.clickInMenu('~News')
    I.waitForElement('~PERMITIR QUE NEWS ACESSE:', 5)
    I.waitForElement('~IDIOMA PREFERIDO', 5)
    I.waitForElement('~NEWS SETTINGS', 5)
})

Scenario('Validar direcionamento - Traduzir', async () => {
    settings.clickInMenu('~Traduzir')
    I.waitForElement('~Idiomas Baixados', 5)
    I.waitForElement('~OnDeviceOnly', 5)
})

Scenario('Validar direcionamento - Mapas', async () => {
    settings.clickInMenu('~Mapas')
    I.waitForElement('~PERMITIR QUE MAPAS ACESSE:', 5)
    I.waitForElement('~MODO DE TRANSPORTE PREFERIDO', 5)
}).tag('@teste')

Scenario('Validar direcionamento - Atalhos', async () => {
    settings.clickInMenu('~Atalhos')
    I.waitForElement('~IDIOMA PREFERIDO', 5)
    I.waitForElement('~Autorize o recebimento de atalhos diretamente de seus contatos. A Apple não pode conferir a autenticidade dos atalhos compartilhados de forma privada. Sobre o Compartilhamento de Atalhos e Privacidade…', 5)
}).tag('@teste')

Scenario('Validar direcionamento - Siri e Busca', async () => {
    const element = '~Siri e Busca'
    await scroll.scrollToElement(element)
    settings.clickInMenu(element)
    I.waitForElement('~PEDIR À SIRI', 5)
    I.waitForElement('~ANTES DE BUSCAR', 5) 
}).tag('@teste')

Scenario('Validar direcionamento - Fotos', async () => {
    const element = '~Foto'
    await scroll.scrollToElement(element)
    settings.clickInMenu(element)
    I.waitForElement('~PERMITIR QUE FOTOS ACESSE:', 5)
    I.waitForElement('~ÁLBUNS', 5)
}).tag('@falha')

Scenario('Validar clcik em Game Center', async () => {
    const element = '~GAMECENTER'
    await scroll.scrollToElement(element)
    settings.clickInMenu(element)
})

Scenario('Validar clcik em Desenvolvedor', async () => {
    const element = '~DEVELOPER_SETTINGS'
    await scroll.scrollToElement(element)
    settings.clickInMenu(element)
})

Scenario('Validar busca por saude', async () => {
    I.performSwipe({ x: 300, y: 200 }, { x: 300, y: 500 })
    settings.find('Saúde')
    const element = '//XCUIElementTypeCell[@name="Saúde"]'
    I.waitForElement(element, 5)
    settings.clickInMenu(element)
    I.waitForElement('~Saúde', 5)
});

Scenario('Validar ativação do modo Escuro', async () => {
    const element = '~DEVELOPER_SETTINGS'
    await scroll.scrollToElement(element)
    settings.clickInMenu(element)
    const swith = '~Aparência Escura'
    const action = async () => await I.grabValueFrom(swith)
    const condtion = await action()
    I.click(swith)
    const valid = await action()
    expect(valid).to.be.equal(condtion > 0 ? '0' : '1');
});

After(async () => {
    if (process.env.AMBIENT === 'remote-android' || process.env.AMBIENT === 'remote-ios') {
        hooks.testPassedOrFail(testPassed)
    }

    testPassed = false
});