const games = [

  // ── 🏆 Mais Transmitidos ──────────────────────────────────────
  {
    id: 1,
    title: "Fortnite",
    genre: "Battle Royale", platform: "PC", year: 2018,
    cover: "/images/fortnite.jpg",
    description: "Um dos jogos com mais horas no canal. Presente em várias temporadas e fases.",
    category: "Mais Transmitidos"
  },
  {
    id: 2,
    title: "Rocket League",
    genre: "Esportes", platform: "PC", year: 2019,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252950/header.jpg",
    description: "Futebol com carros que virou presença fixa nas lives por anos.",
    category: "Mais Transmitidos"
  },
  {
    id: 3,
    title: "PUBG: Battlegrounds",
    genre: "Battle Royale", platform: "PC", year: 2017,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
    description: "Battle royale que dominou a Twitch e foi um dos pilares do canal.",
    category: "Mais Transmitidos"
  },
  {
    id: 4,
    title: "Escape from Tarkov",
    genre: "FPS", platform: "PC", year: 2020,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2379780/header.jpg",
    description: "Shooter hardcore de extração com centenas de horas acumuladas no canal.",
    category: "Mais Transmitidos"
  },
  {
    id: 5,
    title: "Counter-Strike 2",
    genre: "FPS", platform: "PC", year: 2023,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
    description: "Do CS:GO ao CS2, um clássico recorrente em todas as fases do canal.",
    category: "Mais Transmitidos"
  },
  {
    id: 6,
    title: "Call of Duty: Warzone",
    genre: "Battle Royale", platform: "PC", year: 2020,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
    description: "Battle royale da franquia CoD com grande destaque nas transmissões.",
    category: "Mais Transmitidos"
  },
  {
    id: 7,
    title: "Apex Legends",
    genre: "Battle Royale", platform: "PC", year: 2019,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
    description: "Battle royale da Respawn que entrou forte na grade de jogos do Alan.",
    category: "Mais Transmitidos"
  },
  {
    id: 8,
    title: "Dead by Daylight",
    genre: "Terror", platform: "PC", year: 2016,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg",
    description: "Assimétrico de terror cooperativo que virou presença constante no canal.",
    category: "Mais Transmitidos"
  },
  {
    id: 9,
    title: "Valorant",
    genre: "FPS", platform: "PC", year: 2020,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2178700/header.jpg",
    description: "FPS tático que dominou a Twitch no lançamento e permaneceu por longos períodos.",
    category: "Mais Transmitidos"
  },
  {
    id: 10,
    title: "Overwatch",
    genre: "FPS", platform: "PC", year: 2016,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/header.jpg",
    description: "Alan representou o Brasil na Copa do Mundo de Overwatch 2016 como Nextage.",
    category: "Mais Transmitidos"
  },

  // ── 🎬 Campanhas e Grandes Lançamentos ───────────────────────
  {
    id: 11,
    title: "GTA V",
    genre: "Ação", platform: "PC", year: 2015,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    description: "Clássico que sempre volta ao canal em diferentes fases e atualizações.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 12,
    title: "Red Dead Redemption II",
    genre: "Aventura", platform: "PC", year: 2019,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    description: "Campanha épica jogada do início ao fim com enorme engajamento do chat.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 13,
    title: "Elden Ring",
    genre: "RPG", platform: "PC", year: 2022,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    description: "Soulslike que dominou a Twitch no lançamento e rendeu horas de conteúdo.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 14,
    title: "Baldur's Gate 3",
    genre: "RPG", platform: "PC", year: 2023,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    description: "RPG de turno que tomou conta das lives por semanas seguidas no lançamento.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 15,
    title: "Cyberpunk 2077",
    genre: "RPG", platform: "PC", year: 2020,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    description: "Uma das streams mais assistidas do canal no lançamento polêmico.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 16,
    title: "Hogwarts Legacy",
    genre: "Aventura", platform: "PC", year: 2023,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
    description: "Bateu recordes globais de audiência na Twitch durante as lives do Alan.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 17,
    title: "The Witcher 3",
    genre: "RPG", platform: "PC", year: 2015,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
    description: "RPG de mundo aberto jogado por completo em live com quests e DLCs.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 18,
    title: "The Last of Us Parte I",
    genre: "Aventura", platform: "PC", year: 2023,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
    description: "Campanha emocionante jogada do início ao fim nas lives.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 19,
    title: "God of War Ragnarök",
    genre: "Ação", platform: "PC", year: 2024,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg",
    description: "Kratos e Atreus em aventura nórdica épica transmitida ao vivo.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 20,
    title: "A Plague Tale: Requiem",
    genre: "Aventura", platform: "PC", year: 2022,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1182900/header.jpg",
    description: "Continuação sombria jogada em live com reações marcantes do chat.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 21,
    title: "A Plague Tale: Innocence",
    genre: "Aventura", platform: "PC", year: 2019,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/752590/header.jpg",
    description: "Primeiro jogo da franquia, jogado em live antes da sequência.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 22,
    title: "Sekiro: Shadows Die Twice",
    genre: "RPG", platform: "PC", year: 2019,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
    description: "Soulslike da FromSoftware com muitas mortes e momentos icônicos na live.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 23,
    title: "Astro Bot",
    genre: "Plataforma", platform: "PC", year: 2024,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2865780/header.jpg",
    description: "Plataforma charmoso que virou destaque nas lives recentes.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 24,
    title: "Age of Mythology",
    genre: "Estratégia", platform: "PC", year: 2024,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1934680/header.jpg",
    description: "Clássico da estratégia em tempo real remaster jogado ao vivo.",
    category: "Campanhas e Lançamentos"
  },
  {
    id: 25,
    title: "Age of Empires IV",
    genre: "Estratégia", platform: "PC", year: 2021,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1466860/header.jpg",
    description: "Estratégia em tempo real que entrou nas lives como variação de conteúdo.",
    category: "Campanhas e Lançamentos"
  },

  // ── 👻 Terror e Sobrevivência ─────────────────────────────────
  {
    id: 26,
    title: "Minecraft",
    genre: "Sobrevivência", platform: "PC", year: 2012,
    cover: "/images/minecraft.jpg",
    description: "Primeiro grande sucesso do canal — série que construiu a base de fãs.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 27,
    title: "Five Nights at Freddy's",
    genre: "Terror", platform: "PC", year: 2014,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/319510/header.jpg",
    description: "Série de terror que viralizou e consolidou o Alan como referência no YouTube.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 28,
    title: "Resident Evil Village",
    genre: "Terror", platform: "PC", year: 2021,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg",
    description: "Gerou reações memoráveis, especialmente nas cenas da Lady Dimitrescu.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 29,
    title: "Resident Evil 4 Remake",
    genre: "Terror", platform: "PC", year: 2023,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
    description: "Remake do clássico com muitas horas de live e reações do chat.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 30,
    title: "Subnautica",
    genre: "Sobrevivência", platform: "PC", year: 2018,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg",
    description: "Sobrevivência submarina com momentos icônicos de susto no canal.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 31,
    title: "Outlast",
    genre: "Terror", platform: "PC", year: 2013,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/238320/header.jpg",
    description: "Terror clássico das raízes do canal no YouTube.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 32,
    title: "Outlast Trials",
    genre: "Terror", platform: "PC", year: 2024,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1304930/header.jpg",
    description: "Versão cooperativa da franquia Outlast jogada com amigos ao vivo.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 33,
    title: "Amnesia: The Dark Descent",
    genre: "Terror", platform: "PC", year: 2012,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/57300/header.jpg",
    description: "Terror clássico que marcou a era dos sustos no YouTube brasileiro.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 34,
    title: "Dead Space 2",
    genre: "Terror", platform: "PC", year: 2012,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/47780/header.jpg",
    description: "Sci-fi de terror que ajudou a definir o estilo do canal nos primeiros anos.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 35,
    title: "Banishers: Ghosts of New Eden",
    genre: "Terror", platform: "PC", year: 2024,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1341820/header.jpg",
    description: "Ação e terror com enredo marcante jogado em live em 2024.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 36,
    title: "A Quiet Place: The Road Ahead",
    genre: "Terror", platform: "PC", year: 2024,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2737980/header.jpg",
    description: "Terror baseado no universo do filme, jogado ao vivo no lançamento.",
    category: "Terror e Sobrevivência"
  },
  {
    id: 37,
    title: "Animal Well",
    genre: "Aventura", platform: "PC", year: 2024,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/813230/header.jpg",
    description: "Metroidvania indie misterioso explorado ao vivo com muito chat analysis.",
    category: "Terror e Sobrevivência"
  },

  // ── 🤝 Cooperativos ───────────────────────────────────────────
  {
    id: 38,
    title: "Helldivers 2",
    genre: "Cooperativo", platform: "PC", year: 2024,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg",
    description: "Maior sucesso cooperativo de 2024, jogado com amigos streamers.",
    category: "Cooperativos"
  },
  {
    id: 39,
    title: "Lethal Company",
    genre: "Cooperativo", platform: "PC", year: 2023,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg",
    description: "Indie de terror cooperativo que explodiu na Twitch em 2023.",
    category: "Cooperativos"
  },
  {
    id: 40,
    title: "Sea of Thieves",
    genre: "Cooperativo", platform: "PC", year: 2018,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg",
    description: "Aventura pirata cooperativa com outros criadores de conteúdo.",
    category: "Cooperativos"
  },
  {
    id: 41,
    title: "Among Us",
    genre: "Cooperativo", platform: "PC", year: 2020,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg",
    description: "Fenômeno da pandemia, jogado com grandes criadores brasileiros.",
    category: "Cooperativos"
  },
  {
    id: 42,
    title: "Oxygen Not Included",
    genre: "Cooperativo", platform: "PC", year: 2019,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/457140/header.jpg",
    description: "Simulador de colônia espacial em formato cooperativo nas lives.",
    category: "Cooperativos"
  },
  {
    id: 43,
    title: "A Way Out",
    genre: "Cooperativo", platform: "PC", year: 2018,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg",
    description: "Co-op narrativo de fuga jogado com outro streamer ao vivo.",
    category: "Cooperativos"
  },
  {
    id: 44,
    title: "Phasmophobia",
    genre: "Cooperativo", platform: "PC", year: 2020,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg",
    description: "Caça-fantasmas cooperativo com muitos sustos e gargalhadas no chat.",
    category: "Cooperativos"
  },
  {
    id: 45,
    title: "It Takes Two",
    genre: "Cooperativo", platform: "PC", year: 2021,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
    description: "Co-op premiado jogado em live com parceiro, enredo emocionante.",
    category: "Cooperativos"
  },
  {
    id: 46,
    title: "Devour",
    genre: "Cooperativo", platform: "PC", year: 2021,
    cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1274570/header.jpg",
    description: "Terror cooperativo intenso que gerou momentos virais no canal.",
    category: "Cooperativos"
  },
];

export default games;