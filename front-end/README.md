# Desafio Admissional Goomer
### Front-End

#### Desenvolvido em ReactJS

##### Setup:
`npm install`

`npm start`

---

**Dependencias**
  + Mobx
  + Mobx-React
  + React-Bootstrap
  + @material-ui

---

**Estrutura _src/_**
  + components
    - header
      * CustomNavbar.js
      * CustomUsername.js
    - restaurantes
      * CustomCard.js
      * CustomCardapio.js
      * CustomDialog.js
    - Home.js
    - Restaurantes.js
  + store
    - appState.js
  + App.js
  + index.js

---
## Abordagem dos documentos _`.js`_
___

### index.js
##### Tem a função de renderizar o elemento __App__ no elemento _root_ do html

>_App_ = `./App`

---
### App.js
##### Renderiza o __CustomNavbar__ e condiciona a rederização do elemento __Home__ ou do elemento __Restaurantes__.

>_CustomNavbar_ = `./components/header/CustomNavbar`
>
>_Restaurantes_ = `./components/Restaurantes`
>
>_Home_ = `./components/Home`

---
### store/appState.js
##### Manipula variáveis de estado utilizando **[MobX](https://mobx.js.org/)**.

> _userName_ = _`Variavel de estado para identificar o usuário`_
>
> _altera_UserName_ = _`Função para alterar a variável userName`_
>
> _menuDialog_ = _`Variavel de estado para identificar o valor Booleano do CustomDialog`_
>
> _toggle_Dialog_ = _`Função para alterar a variável menuDialog`_
>
> _cardapio_ = _`Variavel de estado para armazenar as informações do Restaurante e o respectivo Cardápio`_
>
> _altera_Cardapio_ = _`Função para alterar a variável cardapio`_

---
### components/Restaurantes.js
##### Renderiza Boas Vindas ao Usuário agora ja identificado e renderiza o elemento __CustomCard__ em loop baseado na resposta da API `Busca de restaurantes = GET: http://challange.goomer.com.br/restaurants`.

>_CustomNavbar_ = `./restaurantes/CustomCard.js`

---
### components/Home.js
##### Renderiza uma mensagem de Boas Vindas, solicitando uma identificação do usuário.

---
### components/restaurantes/CustomCard.js
##### Componente reutilizável para a exibição de uma imagem, titulo, subtitulo e um botão(caso exista um parâmetro de click).

---
### components/restaurantes/CustomCardapio.js
##### Componente para a exibição de um carrossel com uma imagem, um titulo e dois subtitulos.

---
### components/restaurantes/CustomDialog.js
##### Componente para a exibição uma modal(janela sobre a pagina existente) exibindo um __CustomCard__ e um __CustomCardapio__.

---
### components/header/CustomUsername.js
##### Componente que condicionalmente renderiza um Input ou um Paragrafo, caso não exista um usuário definido ou exista, respectivamente.

---
### components/header/CustomNavbar.js
##### Renderiza uma barra de Navegação e o elemento __CustomUsername__.
