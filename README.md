# 🎮 Alanzoka — Game History Tracker

Catálogo visual com todos os jogos transmitidos pelo streamer **Alanzoka** na Twitch. Mais de **200 jogos** organizados por categoria, gênero e ano, com capa, plataforma e uma breve descrição de cada título.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Funcionalidades

- **Busca** por nome do jogo em tempo real
- **Filtro por gênero** (Terror, FPS, RPG, Battle Royale, Aventura…)
- **Filtro por ano** de lançamento
- **Abas por categoria**:
  - 🏆 Mais Transmitidos
  - 🎬 Campanhas e Lançamentos
  - 👻 Terror e Sobrevivência
  - 🤝 Cooperativos
  - 🕹️ Indies e Especiais
- Cards com capa, badge de gênero colorido, plataforma e descrição
- Fallback automático de imagem quando a capa não carrega

---

## 🚀 Como rodar localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

```bash
# Gerar build de produção
npm run build
```

---

## 🗂️ Estrutura

```
src/
├── App.js        # Componente principal com filtros e grid de cards
├── App.css       # Estilos
└── games.js      # Lista completa dos ~200 jogos

public/
└── images/       # Capas locais dos jogos
```

---

## 🎮 Sobre o Alanzoka

[Alanzoka](https://www.twitch.tv/alanzoka) é um dos maiores streamers do Brasil, com transmissões diárias desde 2014. Este projeto registra o histórico de jogos do canal desde os primórdios.

---

Feito com ❤️ para a comunidade.
