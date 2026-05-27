const games = [
  // ── Mais transmitidos ──────────────────────────────────────────
  {
    id: 1,
    title: "Fortnite",
    genre: "Battle Royale",
    platform: "PC",
    year: 2018,
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3wk8.jpg",
    description: "Um dos jogos mais streamados na história do canal, presente em várias fases.",
    category: "Mais Transmitidos"
  },
  {
    id: 2,
    title: "Rocket League",
    genre: "Esportes",
    platform: "PC",
    year: 2019,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252950/header.jpg",
    description: "Futebol com carros que virou fixo nas lives por anos.",
    category: "Mais Transmitidos"
  },
  {
    id: 3,
    title: "PUBG: Battlegrounds",
    genre: "Battle Royale",
    platform: "PC",
    year: 2017,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
    description: "Battle royale que dominou a Twitch e foi um dos pilares do canal.",
    category: "Mais Transmitidos"
  },
  {
    id: 4,
    title: "Escape from Tarkov",
    genre: "FPS",
    platform: "PC",
    year: 2020,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2379780/header.jpg",
    description: "Shooter hardcore de extração com centenas de horas no canal.",
    category: "Mais Transmitidos"
  },
  {
    id: 5,
    title: "Counter-Strike 2",
    genre: "FPS",
    platform: "PC",
    year: 2023,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
    description: "Do CS:GO ao CS2, um clássico recorrente nas lives.",
    category: "Mais Transmitidos"
  },
  {
    id: 6,
    title: "Call of Duty: Warzone",
    genre: "Battle Royale",
    platform: "PC",
    year: 2020,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
    description: "Battle royale da franquia CoD com grande destaque nas transmissões.",
    category: "Mais Transmitidos"
  },
  {
    id: 7,
    title: "Apex Legends",
    genre: "Battle Royale",
    platform: "PC",
    year: 2019,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
    description: "Battle royale da Respawn que entrou forte na grade de jogos do Alan.",
    category: "Mais Transmitidos"
  },
  {
    id: 8,
    title: "Dead by Daylight",
    genre: "Terror",
    platform: "PC",
    year: 2016,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg",
    description: "Assimétrico de terror cooperativo que virou presença constante no canal.",
    category: "Mais Transmitidos"
  },
  // ── Campanhas e Grandes Lançamentos ───────────────────────────
  {
    id: 9,
    title: "GTA V",
    genre: "Ação",
    platform: "PC",
    year: 2015,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    description: "Clássico que sempre volta ao canal em diferentes fases.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 10,
    title: "Red Dead Redemption II",
    genre: "Aventura",
    platform: "PC",
    year: 2019,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    description: "Campanha épica jogada do início ao fim com grande engajamento do chat.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 11,
    title: "Elden Ring",
    genre: "RPG",
    platform: "PC",
    year: 2022,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    description: "Soulslike que dominou a Twitch no lançamento.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 12,
    title: "Baldur's Gate 3",
    genre: "RPG",
    platform: "PC",
    year: 2023,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    description: "RPG de turno que tomou conta das lives por semanas no lançamento.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 13,
    title: "Cyberpunk 2077",
    genre: "RPG",
    platform: "PC",
    year: 2020,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    description: "Uma das streams mais assistidas do canal no lançamento polêmico.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 14,
    title: "Hogwarts Legacy",
    genre: "Aventura",
    platform: "PC",
    year: 2023,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
    description: "Bateu recordes globais de audiência na Twitch durante as lives do Alan.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 15,
    title: "The Witcher 3",
    genre: "RPG",
    platform: "PC",
    year: 2015,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
    description: "RPG de mundo aberto que o Alan jogou por completo em live.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 16,
    title: "The Last of Us Parte I",
    genre: "Aventura",
    platform: "PC",
    year: 2023,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
    description: "Campanha emocionante jogada do início ao fim nas lives.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 17,
    title: "God of War Ragnarök",
    genre: "Ação",
    platform: "PC",
    year: 2024,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg",
    description: "Kratos e Atreus em aventura nórdica épica transmitida ao vivo.",
    category: "Campanhas e Lançamentos"
  },
  // ── Terror e Sobrevivência ─────────────────────────────────────
  {
    id: 18,
    title: "Minecraft",
    genre: "Sobrevivência",
    platform: "PC",
    year: 2012,
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.jpg",
    description: "Primeiro grande sucesso do canal, série que ajudou a construir a base de fãs.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 19,
    title: "Resident Evil Village",
    genre: "Terror",
    platform: "PC",
    year: 2021,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg",
    description: "Gerou reações memoráveis na live, especialmente na Lady Dimitrescu.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 20,
    title: "Five Nights at Freddy's",
    genre: "Terror",
    platform: "PC",
    year: 2014,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/319510/header.jpg",
    description: "Série de terror que viralizou e consolidou o Alan no YouTube.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 21,
    title: "Subnautica",
    genre: "Sobrevivência",
    platform: "PC",
    year: 2018,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg",
    description: "Sobrevivência submarina que gerou momentos icônicos de susto no canal.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 22,
    title: "Outlast",
    genre: "Terror",
    platform: "PC",
    year: 2013,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/238320/header.jpg",
    description: "Terror clássico das raízes do canal no YouTube.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 23,
    title: "Banishers: Ghosts of New Eden",
    genre: "Terror",
    platform: "PC",
    year: 2024,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1341820/header.jpg",
    description: "Lançamento recente de terror e ação jogado em live.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 24,
    title: "Amnesia: The Dark Descent",
    genre: "Terror",
    platform: "PC",
    year: 2012,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/57300/header.jpg",
    description: "Terror clássico que marcou a era dos sustos no YouTube brasileiro.",
    category: "Terror e Sobrevivência"
  },
  // ── Cooperativos ───────────────────────────────────────────────
  {
    id: 25,
    title: "Helldivers 2",
    genre: "Cooperativo",
    platform: "PC",
    year: 2024,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg",
    description: "Sucesso de 2024 jogado com amigos streamers em lives cheias de caos.",
    category: "Cooperativos"
  },
  {
    id: 26,
    title: "Lethal Company",
    genre: "Cooperativo",
    platform: "PC",
    year: 2023,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg",
    description: "Indie de terror cooperativo que explodiu na Twitch em 2023.",
    category: "Cooperativos"
  },
  {
    id: 27,
    title: "Sea of Thieves",
    genre: "Cooperativo",
    platform: "PC",
    year: 2018,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg",
    description: "Aventura pirata cooperativa com outros criadores de conteúdo.",
    category: "Cooperativos"
  },
  {
    id: 28,
    title: "Among Us",
    genre: "Cooperativo",
    platform: "PC",
    year: 2020,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg",
    description: "Fenômeno da pandemia, jogado com grandes criadores brasileiros.",
    category: "Cooperativos"
  },
  {
    id: 29,
    title: "Oxygen Not Included",
    genre: "Cooperativo",
    platform: "PC",
    year: 2019,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/457140/header.jpg",
    description: "Simulador de colônia espacial jogado em formato cooperativo nas lives.",
    category: "Cooperativos"
  },
];

export default games;