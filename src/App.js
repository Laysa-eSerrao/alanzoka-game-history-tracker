import { useState, useMemo } from "react";
import games from "./games";
import "./App.css";

const genreColors = {
  "Terror":        "#e05252", "FPS":           "#e07a30",
  "Battle Royale": "#d4a017", "RPG":           "#9147ff",
  "Sobrevivência": "#3db87a", "Cooperativo":   "#00b8d9",
  "Ação":          "#ff4aba", "Aventura":      "#00c896",
  "Esportes":      "#00b4e4", "Estratégia":    "#7ec8e3",
  "Simulação":     "#a0c4ff", "Indie":         "#b580ff",
  "Puzzle":        "#ffd166", "Plataforma":    "#06d6a0",
  "Corrida":       "#ff6b35", "MOBA":          "#52b788",
  "Luta":          "#e63946",
};

const categoryIcons = {
  "Mais Transmitidos":       "🏆",
  "Campanhas e Lançamentos": "🎬",
  "Terror e Sobrevivência":  "👻",
  "Indies e Especiais":      "🕹️",
  "Cooperativos":            "🤝",
};

function ScoreBar({ score }) {
  if (!score) return <span className="score-na">N/A</span>;
  const color = score >= 85 ? "#3db87a" : score >= 70 ? "#d4a017" : "#e05252";
  return (
    <div className="score-wrap">
      <span className="score-num" style={{ color }}>{score}</span>
      <div className="score-bar">
        <div className="score-fill" style={{ width: `${score}%`, background: color }} />
      </div>
    </div>
  );
}

function Card({ game }) {
  const [open, setOpen]     = useState(false);
  const [imgErr, setImgErr] = useState(false);

  return (
    <div className={`card ${open ? "card--open" : ""}`} onClick={() => setOpen(o => !o)}>
      <div className="card-img-wrap">
        {imgErr ? (
          <div className="card-img-fallback">🎮</div>
        ) : (
          <img
            className="card-img"
            src={game.cover}
            alt={game.title}
            onError={() => setImgErr(true)}
          />
        )}
        <span className="genre-badge" style={{ background: genreColors[game.genre] || "#555" }}>
          {game.genre}
        </span>
        {game.platform !== "PC" && (
          <span className="platform-badge">{game.platform}</span>
        )}
      </div>

      <div className="card-body">
        <h2 className="card-title">{game.title}</h2>
        <p className="card-meta">{game.year}</p>
        <p className="card-desc">{game.description}</p>
      </div>

      {/* Expanded section */}
      {open && (
        <div className="card-expanded" onClick={e => e.stopPropagation()}>
          <div className="expanded-row">
            <div className="expanded-block">
              <span className="exp-label">Metacritic</span>
              <ScoreBar score={game.score} />
            </div>
            <div className="expanded-block">
              <span className="exp-label">Categoria</span>
              <span className="exp-value">{categoryIcons[game.category]} {game.category}</span>
            </div>
          </div>
          {game.playlist ? (
            <a
              className="playlist-btn"
              href={game.playlist}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>▶</span> Ver playlist no YouTube
            </a>
          ) : (
            <p className="no-playlist">Playlist não disponível</p>
          )}
          <button className="close-btn" onClick={() => setOpen(false)}>✕ Fechar</button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [search, setSearch]     = useState("");
  const [genre, setGenre]       = useState("Todos");
  const [year, setYear]         = useState("Todos");
  const [category, setCategory] = useState("Todas");

  const genres = useMemo(() =>
    ["Todos", ...new Set(games.map(g => g.genre))].sort((a,b) =>
      a === "Todos" ? -1 : b === "Todos" ? 1 : a.localeCompare(b)), []);

  const years = useMemo(() =>
    ["Todos", ...new Set(games.map(g => String(g.year)))].sort((a,b) =>
      a === "Todos" ? -1 : b === "Todos" ? 1 : Number(a) - Number(b)), []);

  const categories = useMemo(() =>
    ["Todas", ...new Set(games.map(g => g.category))], []);

  const filtered = useMemo(() => games.filter(g => {
    const q = search.toLowerCase();
    return (
      (!q || g.title.toLowerCase().includes(q) || g.genre.toLowerCase().includes(q)) &&
      (genre    === "Todos" || g.genre    === genre) &&
      (year     === "Todos" || String(g.year) === year) &&
      (category === "Todas" || g.category === category)
    );
  }), [search, genre, year, category]);

  const hasFilter = search || genre !== "Todos" || year !== "Todos" || category !== "Todas";

  return (
    <div className="app">
      <div className="sticky-top">
        <div className="header-inner">
          <div className="logo-area">
            <img src="/images/alanzoka.jpg" alt="Alanzoka" className="logo-icon" />
            <div>
              <h1 className="logo-title">Alanzoka</h1>
              <p className="logo-sub">Game History Tracker</p>
            </div>
          </div>
          <span className="header-count">{filtered.length} jogos</span>
        </div>

        <div className="filters-wrap">
          <div className="tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`tab ${category === cat ? "tab--active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                <span>{cat !== "Todas" ? `${categoryIcons[cat] || ""} ${cat}` : "✦ Todas"}</span>
              </button>
            ))}
          </div>
          <div className="filters">
            <div className="search-wrap">
              <span className="search-icon">🔍</span>
              <input
                className="search"
                type="text"
                placeholder="Buscar jogo ou gênero..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search && <button className="clear-btn" onClick={() => setSearch("")}>✕</button>}
            </div>
            <select className="select" value={genre} onChange={e => setGenre(e.target.value)}>
              {genres.map(g => <option key={g}>{g}</option>)}
            </select>
            <select className="select" value={year} onChange={e => setYear(e.target.value)}>
              {years.map(y => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>
      </div>

      <main className="main">
        {hasFilter && (
          <div className="results-bar">
            <p className="results-text">
              <strong>{filtered.length}</strong> resultado{filtered.length !== 1 ? "s" : ""}
              {search && <> para "<strong>{search}</strong>"</>}
            </p>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="empty"><span>🕹️</span><p>Nenhum jogo encontrado.</p></div>
        ) : (
          <div className="grid">
            {filtered.map((game, i) => (
              <Card key={game.id} game={game} index={i} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}