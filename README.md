# Rocketshoes
<div style="display: flex; justify-content: center;">
<img src="https://raw.githubusercontent.com/allanmaral/Rocketseat-desafio-07/master/src/assets/images/Logo.svg" alt="Log Rocketshoes" style="background-color: #000; padding: 20px; border-radius: 10px"/>
</div>

Projeto desenvolvido como parte do bootcamp *GoStack 9.0* da [Rocketseat](https://rocketseat.com.br/)

A aplicação possui listagem de produtos na rota ```/``` e visualização do carrinho na rota ```/cart```.

Para controle do carrinho e verificação de estoque, foi utilizado redux e redux-saga.

### Home
<img src="https://raw.githubusercontent.com/allanmaral/Rocketseat-desafio-07/master/.github/home.png" alt="Tela da aplicação na home" />

### Cart
<img src="https://raw.githubusercontent.com/allanmaral/Rocketseat-desafio-07/master/.github/cart.png" alt="Tela da aplicação no carrinho" />


## Executando a aplicação
Para executar a aplicação, é necessário que se tenha o [Node](https://nodejs.org/en/) instalado.

Após clonar o repositório, execute:
```sh
yarn install
yarn start
```

O para simular uma API REST, este projeto utiliza o arquivo [server.json](https://raw.githubusercontent.com/allanmaral/Rocketseat-desafio-07/master/server.json) em conjunto com a ferramenta [json-server](https://github.com/typicode/json-server). Para iniciar o json-server, execute:
```sh
yarn json-server
```
