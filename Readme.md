Projeto de automação de testes e2e.

Pré-condições:
- NodeJs
- Appium

Para instalar as dependências do projeto executar no terminal: 

`npm install`
ou
`yarn install`

Para executar os testes automatizados no ambiente local: 

iniciar o servidor do appium: 
"rodar em um terminal separado"

`appium --base-path=/wd/hub`

Existem scripts pré criados na - package.json, para que o inicio dos testes derem certo sempre alterar o UDID pra o dispositivo que deseja iniciar o testes. 

Para rodar os testes no android:
"rodar no terminal dentro do projeto"

`npm run android`

Para rodar os testes no iOS: 

`npm run ios`

Para executar os testes automatizados no browserStack:
"rodar no terminal dentro do projeto"

android: 

`npm run browser-android`

ios: 

`npm run browser-ios`

Para abrir o relatório de testes:   

o relatório de teste vai ser gerado dentro da pasta output após a execução dos testes automatizados, basta abrir o arquivo mochawesome.html em um navegador para visualizar o relatório.  

links de apoio: 
https://nodejs.org/en/
https://codecept.io/mobile/

versões estáveis do codeceptjs:
"codeceptjs": "3.6.4"

versões estáveis do appium: 
"appium": "2.5.1",
"appium-uiautomator2-driver": "3.0.4",
"appium-xcuitest-driver": "7.9.1",