# Teste Frontend VueJs

#### Descrição do desafio:

Construir um cadastro de cliente simples e associação de produtos oferecidos ao mesmo. A tela de cadastro de produtos deve conter: Nome, Ativo(Sim ou Não); e a de clientes: Nome, Documento, Telefone, Email, Ativo(Sim ou Não). Deve haver outra tela para associar os produtos ao cliente, com o nome do mesmo e os produtos para associar. Após os cadastros deve haver uma listagem com os produtos cadastrados, com a opção de editar e inativar/ativar, dos clientes, com as opções de edição, inativar/ativar e associar produtos.

## Project Setup
O projeto utiliza de node 12

```sh
npm install
```

### Run mock API - [Json Server](https://github.com/typicode/json-server)

```sh
npm run watch-db
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## A Resolução

#### Descrição do projeto

![image](https://user-images.githubusercontent.com/32396925/209005315-53755c6c-63e8-4cf1-b666-b31d4afe02b4.png)

A tela inicial do projeto apresenta ambas as listagens, de produtos e clientes. O ícone próximo ao título das listagens leva ao registro de suas respectivas categorias. Além de nome, documento, telefone, email e atividade (ou apenas nome e atividade, para a tabela de produtos), há a seção de Ações. Nesta há os ícones para edição e associação de clientes e produtos (ou apenas edição, para a tabela de produtos).

![image](https://user-images.githubusercontent.com/32396925/209005344-d2c0f4df-dc07-4602-8603-583d82dd7418.png)

Nas telas de edição, além de alterar os campos preenchidos nas telas de cadastro, é possível excluir o cliente ou produto, sendo esta uma ação diferente de desativar. Enquanto na tela de associoação é mostrada a lista dos produtos junto a uma checkbox, que quando ativa representa que aquele produto está disponível para o cliente em questão. Em ambas as telas existe um botão de retorno no canto superior esquerdo.

![image](https://user-images.githubusercontent.com/32396925/209005370-75394cdd-732b-49ac-88d9-60555525e836.png)

#### Desenvolvimento do projeto

Para a simulação do banco de dados foi utiizada a biblioteca [Json Server](https://github.com/typicode/json-server), uma vez que seu uso permite uma transição para um caso real de API apenas substituindo a URL presente no arquivo .env. Para o CSS foi utilizado o framework [Tailwind](https://tailwindcss.com/), para que fosse possível uma abordagem "utility first". Quanto a estrutura do projeto, foram separados os componentes primários e as funções de chamada à API, a fim de aproveitar da reutilização de modularização das mesmas.
