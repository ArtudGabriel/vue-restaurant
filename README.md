# Vue Restaurant Management

Este é um projeto de gerenciamento de restaurantes desenvolvido com **Vue.js**. Ele permite que os usuários se cadastrem, façam login e gerenciem uma lista de restaurantes, incluindo a criação, atualização e exclusão de registros.

## 📋 Funcionalidades

- **Cadastro de Usuários**: Permite que novos usuários se registrem.
- **Login de Usuários**: Autenticação de usuários registrados.
- **Listagem de Restaurantes**: Exibe uma tabela com informações dos restaurantes cadastrados.
- **Adicionar Restaurante**: Permite adicionar novos restaurantes.
- **Atualizar Restaurante**: Permite editar informações de restaurantes existentes.
- **Excluir Restaurante**: Permite remover restaurantes da lista.
- **Proteção de Rotas**: Redireciona usuários não autenticados para a página de login.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Vue.js 3
- **Estilização**: CSS
- **Backend**: JSON Server (simulando uma API REST)
- **Gerenciamento de Rotas**: Vue Router
- **HTTP Requests**: Axios
- **Armazenamento Local**: LocalStorage

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **public/:** Arquivos públicos do projeto.
- **src/:** Contém o código-fonte principal.
- **assets/:** Imagens e outros recursos estáticos.
- **components/:** Componentes Vue, como Header.vue, Home.vue, SignUp.vue, Login.vue e Update.vue.
- **router/:** Configuração de rotas.
- **App.vue:** Componente raiz.
- **main.js:** Arquivo principal do Vue.
- **db.json:** Banco de dados simulado para o JSON Server.
- **package.json:** Dependências e scripts do projeto.


## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina.
- Gerenciador de pacotes npm ou yarn.

### Passo a Passo

- Clone o repositório:

Execute o comando: git clone https://github.com/seu-usuario/vue-restaurant.git
Acesse o diretório do projeto: cd vue-restaurant

- Instale as dependências:

Execute: npm install

- Inicie o servidor JSON Server:

Execute: npx json-server --watch db.json --port 3000
O servidor estará disponível em: http://localhost:3000

- Inicie o servidor de desenvolvimento do Vue:

Execute: npm run serve
O projeto estará disponível em: http://localhost:8080

## 📚 Rotas do Projeto

/signup: Página de cadastro de usuários.

/login: Página de login.

/: Página inicial com a lista de restaurantes.

/update-restaurant/:id: Página para atualizar informações de um restaurante.

## 📦 Dependências Principais

Vue.js: Framework JavaScript para construção de interfaces.

Vue Router: Gerenciamento de rotas.

Axios: Para realizar requisições HTTP.

JSON Server: Simulação de uma API REST.

## 🛡️ Proteção de Rotas

O projeto utiliza o localStorage para armazenar informações do usuário autenticado. Caso um usuário não autenticado tente acessar uma rota protegida, ele será redirecionado para a página de login.

## 
📝 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

**Feito com ❤️ por Gabriel.**