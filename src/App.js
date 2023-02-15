import { useState } from "react";
import "./App.css";
import emojis from "./emojis.json";
import Navi from "./Navi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterdEmojis = () => {
    return (
      <div className="emojis-list">
        {emojis
          .filter(
            (emoji) =>
              emoji.category.toLowerCase().includes(search.toLowerCase()) ||
              emoji.description.toLowerCase().includes(search.toLowerCase())
          )
          .map((emojiFiltered) => {
            return (
              <div className="emojis-item" key={emojiFiltered.description}>
                <p>{emojiFiltered.emoji}</p>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className="App">
      <section>
        <h1>EmojiLand</h1>
        <input value={search} onChange={handleSearch} placeholder="Search" />

        <Router>
          <Routes>
            <Route path="/" element={<Navi />} />
          </Routes>
        </Router>

        <div>{filterdEmojis()}</div>
      </section>
    </div>
  );
}

export default App;
