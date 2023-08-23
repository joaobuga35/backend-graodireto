<h1 align="center"> DicaFoods API</h1>

<div align="center">
  
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=fff) 	![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 

</div>


<h2>Índice</h2>

1. [ Sobre ](#sobre)
2. [ Tecnologias](#techs)
3. [ Instalação ](#install)


<a name="sobre"></a>

## 1. Sobre
Este projeto foi gerado com NestJS.

Esta é uma API de sugestão de restaurantes e pratos com NestJS. Ela oferece funcionalidades avançadas de CRUD para restaurantes, comidas e usuários. 

A API possui autenticação de usuário e permite visualizar todos os restaurantes cadastrados com seus respectivos pratos. Há uma diferenciação entre usuários comuns e usuários admnistradores, com recursos adicionais disponíveis para admnistradores. Apenas admnistradores e próprios usuários podem deletar ou atualizar o usuário. Apenas admnistradores podem deletar e atualizar restaurantes e comidas.

### 1.1 Deploy da Aplicação para teste no Front-end

- <a name="DicaFoods" href="https://grao-app.vercel.app/" target="_blank">DicaFoods - Live</a>

<a name="techs"></a>

## 2. Tecnologias

- <a name="nest" href="https://docs.nestjs.com" target="_blank">NestJS</a>
- <a name="postgres" href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>

<a name="install"></a>
## 3. Instalação e uso

### 3.1 Pré-Requisitos:
  <h4>1º Passo</h4>
  <h5>Antes de começar, certifique-se de ter instalado o Node.js em sua máquina. Acima da versão 16</h3>
  <p>Faça um fork deste repositório, depois clone o fork em sua máquina.</p>

  <h4>2º passo</h4>
  Variáveis de ambiente:
    Crie um arquivo .env e complete com suas informações conforme esta no .env.example.

  <h4>3º Passo - Configurando o Backend</h4>
  - Rode os seguintes comandos: 
  
  ```bash
  #instala todas as dependências necessárias
  $ npm install
    
  $ #migrate
  $ npx prisma migrate dev
  #generate
  $ npx prisma generate
    
  # development
  $ npm run start
    
  # watch mode
  $ npm run start:dev
    
  # production mode
  $ npm run start:prod
  ```
  <h4>4º Passo - Testando o Backend</h4>
  0. Primeiro rode o comando "npm run start:dev"
  1. Acesse a documentação completa em: http://localhost:3000/api <br>
  2. Na raiz do projeto há um arquivo chamado "dicafoods.json" que pode ser importado no insomnia para serem efetuados testes de rota, olhe a documentação e execute as rotas .

## 4. Ambiente de desenvolvimento FRONT-END
  <h4>1º Passo</h4>
  <p>Acesse o seguinte repositório: <a name="frontend" href="https://github.com/joaobuga35/frontend-graodireto" target="_blank">Repositório Front-end</a> </p>
  <p>Siga as instruções do README para poder testar e contribuir com o projeto.</p>
