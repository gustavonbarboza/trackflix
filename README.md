# 🍿 TrackFlix

TrackFlix é uma aplicação web desenvolvida em **React** que permite explorar informações sobre **filmes**, **séries** e **pessoas** (atores/atrizes) usando dados da API do [The Movie Database (TMDB)](https://www.themoviedb.org/). O projeto possui um layout responsivo, visual moderno e componentes reutilizáveis, além de funcionalidades como pesquisa, páginas detalhadas e carrosséis horizontais de conteúdo.

## 🔍 Funcionalidades

* Buscar por filmes, séries ou pessoas pelo nome
* Visualizar detalhes completos de filmes e séries:

  * Gêneros, data de lançamento, nota, sinopse, elenco principal
* Visualizar detalhes de pessoas:

  * Biografia, data de nascimento, gênero e obras conhecidas
* Layout responsivo para dispositivos móveis
* Carrossel horizontal para elencos e filmes relacionados
* Componentes reutilizáveis (Cards, Poster, Scroll, etc.)

---

## 🖼️ Interface

### Página inicial:

* Pesquisa global por nome
* Listagem de filmes e séries em seções separadas

### Página de filme/série:

* Banner com imagem de fundo
* Poster em destaque
* Informações como nota, sinopse, gêneros, elenco em carrossel

### Página de pessoa:

* Foto em destaque
* Biografia expansível
* Dados pessoais
* Carrossel com obras em que atuou

---

## ✨ Tecnologias utilizadas

* [React](https://reactjs.org/)
* [Styled-Components](https://styled-components.com/)
* [TMDB API](https://developer.themoviedb.org/)
* [React Router DOM](https://reactrouter.com/en/main)
* [Create React App](https://create-react-app.dev/)

---

## 📦 Como rodar o projeto localmente

### Pré-requisitos:

* Node.js e npm instalados

### Passos:

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/trackflix.git

# 2. Acesse a pasta
cd trackflix

# 3. Instale as dependências
npm install

# 4. Crie um arquivo .env na raiz com sua chave da API TMDB:
```

```
(./services/api.js) -> const apiKey = "sua_chave_aqui"
```

```bash
# 5. Inicie o projeto
npm start
```

> O app estará disponível em `http://localhost:3000`

---

## 🧠 Organização de pastas

```
trackflix/
├── public/
├── src/
│   ├── assets/           # Imagens e ícones
│   ├── components/       # Componentes reutilizáveis (Cards, Header, Scroll, etc.)
│   ├── hooks/            # Custom Hooks (ex: carregarElenco)
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home/
│   │   ├── Movie/
│   │   ├── NotFound/
│   │   ├── PageDetails/
│   │   ├── Person/
│   │   └── Search Results/
│   │   ├── Series/
│   ├── services/         # Configuração da API (axios)
│   ├── styles/           # Estilos globais (opcional)
│   ├── App.jsx
│   └── index.jsx         # Ponto de entrada da aplicação
├── package.json
└── README.md
```

---

## 🧪 API utilizada - TMDB

Todos os dados são consumidos da **API pública do The Movie Database (TMDB)**.

* URL base: `https://api.themoviedb.org/3`
* É necessário gerar uma chave gratuita [aqui](https://www.themoviedb.org/settings/api)

### Exemplos de endpoints usados:

* Buscar filmes: `/search/movie`
* Buscar séries: `/search/tv`
* Buscar pessoas: `/search/person`
* Detalhes do filme: `/movie/{id}`
* Detalhes da série: `/tv/{id}`
* Detalhes da pessoa: `/person/{id}`
* Elenco: `/movie/{id}/credits` ou `/tv/{id}/credits`

---

## 📱 Responsividade

O layout se adapta perfeitamente a dispositivos móveis, com elementos que se reorganizam ou redimensionam em telas menores, como:

* Cards que se tornam quadrados
* Poster redimensionado
* Ajuste de paddings e fontes

---

## 🧑‍💻 Autor

Desenvolvido por **Gustavo Barboza**, estudante de desenvolvimento que quer aplicar todos os estudos e gosta muito de filmes, séries e tecnologia.

---

## 🌟 Contribuições

Sinta-se à vontade para abrir issues, sugerir melhorias ou fazer pull requests!
