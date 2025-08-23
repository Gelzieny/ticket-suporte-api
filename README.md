<h1 align="center"> 🔗 API de ticket de suporte </h1>

<p align="justify">
Esta API permite a criação e gerenciamento de tickets de suporte, facilitando a comunicação entre usuários e equipe de suporte.
</p>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#instalacao">Instalação</a> • 
 <a href="#uso">Uso</a> • 
 <a href="#endpoints">Endpoints</a> • 
 <a href="#como-executar-o-projeto">Como executar</a> • 
 <a href="#autor">Autor</a> • 
 <a href="#licenca">Licença</a>
</p>


## 💻 Sobre

<p align="justify">

Este projeto foi desenvolvido como parte do **Módulo de Fundamentos de Node.js** da formação **Full-Stack** da
<a href="https://app.rocketseat.com.br/">Rocketseat</a>. Ela permite gerenciar tickets de suporte, possibilitando que os usuários abram, visualizem e atualizem seus tickets, enquanto a equipe de suporte pode gerenciar e responder a esses tickets de forma organizada.

</p>

## 🛠 Tecnologias

<p align="justify">Este projeto utiliza um conjunto de tecnologias modernas para garantir uma aplicação eficiente e escalável, incluindo:</p>

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=git,html,css,js,vscode,nodejs,express,mongodb" />

</a>

## 📦 Instalação

```bash
# Clone este repositório
$ git clone <https://github.com/Gelzieny/ticket-suporte-api.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd ticket-suporte-api

# Instale as dependências
$ npm install
```

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```bash
# Porta do servidor
PORT=3001

# URL de conexão com o banco de dados
DB_URL=mongodb://localhost:27017/ticket-suporte
```

## 🚀 Uso

A API está agora rodando em `http://localhost:3001`. Você pode usar ferramentas como Postman ou Insomnia para testar os endpoints.

## 🔍 Endpoints

- `POST /tickets`: Cria um novo ticket de suporte.
```json
{
  "title": "Problema com login",
  "description": "Estou having trouble logging in",
  "priority": "high"
}
```
- `GET /tickets/:id`: Retorna um ticket de suporte específico.
```json
{
  "id": "657890abcdef1234567890ab",
  "title": "Problema com login",
  "description": "Estou having trouble logging in",
  "priority": "high",
  "status": "open",
  "createdAt": "2023-12-15T10:00:00Z",
  "updatedAt": "2023-12-15T10:00:00Z"
}
```

- `PUT /tickets/:id`: Atualiza um ticket de suporte específico.
```json
{
  "title": "Problema com login",
  "description": "Estou having trouble logging in",
  "priority": "high",
  "status": "closed"
}
```

- `DELETE /tickets/:id`: Deleta um ticket de suporte específico.
```json
{
  "id": "657890abcdef1234567890ab",
  "title": "Problema com login",
  "description": "Estou having trouble logging in",
  "priority": "high",
  "status": "closed",
  "createdAt": "2023-12-15T10:00:00Z",
  "updatedAt": "2023-12-15T10:00:00Z"
}
```

## 🔧 Como executar

```bash
# Execute a aplicação
$ npm start
```


# 🧑🏻‍💻 Autor

Feito com ❤️ por Gelzieny R. Martins 👋🏽 [Entre em contato!](https://gelzieny-dev.vercel.app/)

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
