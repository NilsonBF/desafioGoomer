# Desafio Admissional Goomer
### Back-End

#### Desenvolvido em NodeJS

##### Setup:
`npm install`

`npm start`

---

**Dependencias**
  + body-parser
  + chai
  + chai-http
  + express
  + mongoose
  + mocha

---

**Estrutura _src/_**
  + config
    - config.js
  + controller
    - Group.js
    - User.js
  + model
    - Group.js
    - User.js
  + routes
    - rotas.js
  + test
    - index.js
  + index.js

---
## Abordagem dos documentos _`.js`_
___

### index.js
>###### Instancia o servidor na porta 16000

>###### Importa configurações de DB
>###### Conecta no DB local

>###### Importa rotas da api

---
### test/index.js
##### Realiza testes nas rotas utilizando `mocha` e `chai`.

---
### model/User.js
##### Cria o `Schema` da coleção User no Banco de Dados.

---
### model/Group.js
##### Cria o `Schema` da coleção Group no Banco de Dados.

---
### controller/User.js
##### Define as operações das rotas para o modelo User.

---
### controller/Group.js
##### Define as operações das rotas para o modelo Group.

---
### config/config.js
##### Define a string de coexão com o banco.

---
### routes/rotas.js
##### Define as rotas da api.

---

# Abordagem API:

> ## _Listar todos os usuários_
> ### GET 
> #### /api/v1/user
> __Parâmetros:__
> ```
>
> ```
> __Resposta:__
> ```
> {
>        status: "success",
>        message: "Usuários encontrados.",
>        data: {...[]}
> }
> ```

> ## _Cadastrar novo usuário_
> ### POST 
> #### /api/v1/user
> __Parâmetros:__
> ```
> {
>   login: "", //String | obrigatório
>   email: "", //String | obrigatório
>   nome: "" //String | obrigatório
> }
> ```
> __Resposta:__
> ```
> {
>   status: "success",
>   message: "Usuário criado com sucesso.",
>   data: {}
> }
> ```

> ## _Listar um usuário_
> ### GET 
> #### /api/v1/user/:user_id
> __Parâmetros:__
> ```
>
> ```
> __Resposta:__
> ```
> {
>   status: "success",
>   message: "Usuário encontrado com sucesso.",
>   data: {}
> }
> ```

> ## _Alterar usuário_
> ### PUT & PATCH 
> #### /api/v1/user/:user_id
> __Parâmetros:__
> ```
> {
>   login: "", //String
>   email: "", //String
>   nome: "" //String
> }
> ```
> __Resposta:__
> ```
> {
>   status: "success",
>   message: "Usuário atualizado.",
>   data: {}
> }
> ```

> ## _Remover usuário_
> ### DELETE 
> #### /api/v1/user/:user_id
> __Parâmetros:__
> ```
>
> ```
> __Resposta:__
> ```
> {
>   status: "success",
>   message: "Usuário removido com sucesso.",
>   data: {}
> }
> ```

> ## _Listar todos os grupos_
> ### GET 
> #### /api/v1/group
> __Parâmetros:__
> ```
>
> ```
> __Resposta:__
> ```
> {
>        status: "success",
>        message: "Grupos encontrados.",
>        data: {...[]}
> }
> ```

> ## _Adicionar novo grupo_
> ### POST 
> #### /api/v1/group
> __Parâmetros:__
> ```
> {
>   nome: "", //String | obrigatório
>   users: ["",""], //Array of String | obrigatório | 2 ou mais elementos | id_user
> }
> ```
> __Resposta:__
> ```
> {
>   status: "success",
>   message: "Grupo criado com sucesso.",
>   data: {}
> }
> ```

> ## _Listar um grupo_
> ### GET 
> #### /api/v1/group/:group_id
> __Parâmetros:__
> ```
>
> ```
> __Resposta:__
> ```
> {
>   status: "success",
>   message: "Grupo encontrado com sucesso.",
>   data: {}
> }
> ```

> ## _Altera um grupo_
> ### PUT & PATCH 
> #### /api/v1/group/:group_id
> __Parâmetros:__
> ```
> {
>   nome: "", //String
>   users: ["",""], //Array of String | id_user
> }
> ```
> __Resposta:__
> ```
> {
>   status: "success",
>   message: "Grupo atualizado.",
>   data: {}
> }
> ```

> ## _Remove um grupo_
> ### DELETE 
> #### /api/v1/group/:group_id
> __Parâmetros:__
> ```
>
> ```
> __Resposta:__
> ```
> {
>   status: "success",
>   message: "Grupo removido com sucesso.",
>   data: {}
> }
> ```

> ## _Listar usuários de um grupo_
> ### GET 
> #### /api/v1/group/operations/:group_id
> __Parâmetros:__
> ```
>
> ```
> __Resposta:__
> ```
> {
>   status: "success",
>   message: "Usuarios do grupo ${group.nome} encontrado.",
>   data: {}
> }
> ```

> ## _Adicionar usuários a um grupo_
> ### PUT & PATCH 
> #### /api/v1/group/operations/:group_id
> __Parâmetros:__
> ```
> {
>   users: [] //Array of String | id_user
> }
> ```
> __Resposta:__
> ```
> {
>   status: "success",
>   message: "Usuários adicionados.",
>   data: {}
> }
> ```

> ## _Listar grupos de um usuário_
> ### GET 
> #### /api/v1/user/operations/:user_id
> __Parâmetros:__
> ```
> {
> 
> }
> ```
> __Resposta:__
> ```
> {
>   status: "success",
>   message: "Grupos do Usuario.",
>   data: {}
> }
> ```