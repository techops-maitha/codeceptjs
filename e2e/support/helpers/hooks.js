const { I } = inject();

module.exports = {
    async before() {
        
       
    },

    testPassedOrFail(testPassed) {
        if (testPassed === true) {
            I.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": " Teste realizado com sucesso"}}')
        }
        else {
            I.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Teste falhou"}}')
        }
    }
}