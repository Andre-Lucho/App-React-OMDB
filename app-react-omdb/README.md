# Buscador de Filmes React - +PraTI

Buscador de filmes desenvolvido em React + Sass realizado como atividade do do módulo React do Curso Trilha Dev. Full Stack Jr. turma - 2025​.

O projeto consiste em um buscador de filmes que utiliza a API do OMDB (The Open Movie Database) em: https://www.omdbapi.com/).

Você pode pesquisar filmes e visualizar detalhes de cada filme pesquisado, além de adicionar e remover filmes, através de sua pesquisa, que ficará armazenada em sua Página des favoritos, com uma interface leve, moderna e responsiva.

## 1. Funcionalidades Implementadas:

a) Buscar filmes por nome;  
b) Visualizar detalhes de cada filme;  
c) Adicionar e remover filmes favoritos diretamente, através da:

- Página de pesquisa (Dashboard) e
- Página de detalhes (Modal);

d) Página exclusiva para seus filmes favoritos, onde podemos visualizar os favoritos armazenados e também excluí-los por essa página.

## 2. Tecnologias utilizadas:

React - Hooks, Custom Hooks, Formulários e Containers;  
 React Router DOM;  
 Vite;  
 ESLint;  
 Sass.

## 3. Instalação

Para executá-lo, é necessário ter instalado em sua máquina: ferramena de versionamento **Git**, o **Node.js** e um **gerenciador de pacotes** de sua escolha (npm, pnpm...).

A) Abra o seu terminal em uma pasta deseaja e Clone o repositório:

```
git clone https://github.com/Andre-Lucho/App-React-OMDB.git
```

B) Acesse a pasta do projeto:

```
cd App-React-OMDB/app-react-omdb
```

C) Instale as dependências:

```
npm install
```

D) Configure um arquivo .env:  
Crie um arquivo do tipo '.env' na raiz do projeto e adicione suas chaves da API OMDB no corpo do arquivo:

```
VITE_API_KEY='SEU_TOKEN_AQUI'
```

Obs.: O token é composto por ums string com números e letras fornecidas pela equipe da OMDB, através de um cadastramento.

E) Execute o projeto:

```
npm start
```

O projeto estará disponível em http://localhost:portal-local/ (informado pelo Vite).

## 4. Melhorias futuras

A) Melhorias em estilizações, especilamente para mobiles.  
B) Implementações de mais informações e imagens de filmes, atores e diretores, através do consumo de outra API - TMDP

## Autores

- [@Andre-Lucho](https://github.com/Andre-Lucho)
