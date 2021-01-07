import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import CastGrid from "./components/characters/CastGrid";
import Search from "./components/ui/Search";

function App() {
  const [characters, setCharacters] = useState([]),
    [isLoading, setIsLoading] = useState(true),
    [urlQuery, setUrlQuery] = useState("");

  useEffect(() => {
    async function getCharacters() {
      const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${urlQuery}`);

      console.log(response.data);

      setCharacters(response.data);

      setIsLoading(false);
    }

    getCharacters();
  }, [urlQuery]);

  return (
    <div className="container">
      <Header />
      <Search getUrlQuery={name => setUrlQuery(name)} />
      <CastGrid characters={characters} isLoading={isLoading} />
    </div>
  );
}

export default App;
