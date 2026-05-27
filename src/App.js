import { useState } from "react";
import games from "./games";
import "./App.css";

function App() {
  const [search, setSearch]         = useState("");
  const [genreFilter, setGenre]     = useState("Todos");
  const [yearFilter, setYear]       = useState("Todos");
  const [categoryFilter, setCategory] = useState("Todas");
  const [imgErrors, setImgErrors]   = useState({});

  const genres = ["Todos", ...new Set(games.map(g => g.genre))].sort((a, b) =>
    a === "Todos" ? -1 : b === "Todos" ? 1 : a.localeCompare(b)
  );
  const years = ["Todos", ...new Set(games.map(g => String(g.year)))].sort((a, b) =>
    a === "Todos" ? -1 : b === "Todos" ? 1 : Number(a) - Number(b)
  );
  const categories = ["Todas", ...new Set(games.map(g => g.category))];

  const filtered = games.filter(game => {
    const matchSearch   = game.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre    = genreFilter    === "Todos"  || game.genre     === genreFilter;
    const matchYear     = yearFilter     === "Todos"  || String(game.year) === yearFilter;
    const matchCategory = categoryFilter === "Todas"  || game.category  === categoryFilter;
    return matchSearch && matchGenre && matchYear && matchCategory;
  });

  const genreColors = {
    "Terror":        "#e05252",
    "FPS":           "#e07a52",
    "Battle Royale": "#d4a017",
    "RPG":           "#7a52e0",
    "Sobrevivência": "#52a06e",
    "Cooperativo":   "#5299e0",
    "Ação":          "#e05299",
    "Aventura":      "#3db8a0",
    "Esportes":      "#52c0e0",
    "Puzzle":        "#e0b052",
    "Estratégia":    "#52e0c0",
    "Indie":         "#a852e0",
  };

  const categoryIcons = {
    "Mais Transmitidos":       "🏆",
    "Campanhas e Lançamentos": "🎬",
    "Terror e Sobrevivência":  "👻",
    "Cooperativos":            "🤝",
    "Indies e Especiais":      "🕹️",
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo-area">
            <span className="logo-icon">🎮</span>
            <div>
              <h1 className="logo-title">Alanzoka</h1>
              <p className="logo-sub">Game History Tracker</p>
            </div>
          </div>
          <p className="header-count">{filtered.length} jogo{filtered.length !== 1 ? "s" : ""}</p>
        </div>
      </header>

      <main className="main">
        {/* Category tabs */}
        <div className="tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab ${categoryFilter === cat ? "tab--active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat !== "Todas" && categoryIcons[cat] ? `${categoryIcons[cat]} ` : ""}{cat}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="filters">
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search"
              type="text"
              placeholder="Buscar jogo..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="clear-btn" onClick={() => setSearch("")}>✕</button>
            )}
          </div>
          <select className="select" value={genreFilter} onChange={e => setGenre(e.target.value)}>
            {genres.map(g => <option key={g}>{g}</option>)}
          </select>
          <select className="select" value={yearFilter} onChange={e => setYear(e.target.value)}>
            {years.map(y => <option key={y}>{y}</option>)}
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="empty">
            <span>🕹️</span>
            <p>Nenhum jogo encontrado com esses filtros.</p>
          </div>
        ) : (
          <div className="grid">
            {filtered.map((game, i) => (
              <div
                className="card"
                key={game.id}
                style={{ animationDelay: `${i * 30}ms` }}
              >
                <div className="card-img-wrap">
                  {imgErrors[game.id] ? (
                    <div className="card-img-fallback">🎮</div>
                  ) : (
                    <img
                      className="card-img"
                      src={game.cover}
                      alt={game.title}
                      onError={() => setImgErrors(e => ({ ...e, [game.id]: true }))}
                    />
                  )}
                  <span
                    className="genre-badge"
                    style={{ background: genreColors[game.genre] || "#555" }}
                  >
                    {game.genre}
                  </span>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{game.title}</h2>
                  <p className="card-meta">{game.platform} · {game.year}</p>
                  <p className="card-desc">{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;