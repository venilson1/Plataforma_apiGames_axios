# 🕹🎮 Consumindo Api de Games 

<br>

## 🚀 Neste Projeto, foi desenvolvido uma API de games com 3 campos(título, ano e o preço), onde esses dados são salvos no banco de dados Mysql. No frontend utilizei o Axios para realizar requisições e fazer alterações nos dados foernecido pela api criada.

### Features

- [x] Cadastro de Games
- [x] Deletar Game
- [x] Atualizar Game

<br>
<br>

## ✅ Pré-requisitos e como rodar a aplicação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Mysql](https://www.mysql.com/), ou instalar o [Docker](https://hub.docker.com/_/mariadb) e após baixar a imagem MariaDB, inciando com o comando ``docker pull mariadb``, caso esteja em dúvida utilizar o docker e criar container na sua maquina, dê uma olhada na documentação. [MariaDB](https://mariadb.com/kb/en/installing-and-using-mariadb-via-docker/)
Além disto é bom ter um editor para alterar o código [VSCode](https://code.visualstudio.com/).

<br>
<br>

### 🎲 Configurando o Banco de Dados (servidor)

- Use qualquer database Client de sua preferência

```
database: apigames;
username: root;
password: root;
```
<br>
<br>

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/venilson1/Consumindo-Api>

# Acesse a pasta do projeto no terminal
$ cd plataformadegames

# Instale as dependências
$ npm install
```

> #### Depois de iniciar o projeto a primeira...
> - Entre na pasta **Model**.
> - e apague o código de criação do banco de dados da linha 19 
>  - `` 
>  Game.sync({ force: true })
>  .then(() => {console.log('created table Game');
>  ``
>  - **Assim evitará que toda alteração crie uma nova tabela no banco de dados.**

<br>
<br>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Express](http://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [nodemon](https://www.npmjs.com/package/nodemon/)
- [sequelize](https://sequelize.org/)
- [axios](https://www.npmjs.com/package/axios/)
- [cors](https://www.npmjs.com/package/cors/)
