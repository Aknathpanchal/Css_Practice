import React, { useState, useEffect } from "react";
import './App.css';
import SearchBar from "./Components/SearchBar";
import countries from "./utils/contries";

export default function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // string matching or fetching that info
    if (query === "") {
      setSuggestions([]);
    } else {
      let val = countries
        .filter((item) =>
          item.country.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.country);
      setSuggestions(val);
    }
    setLoading(false);
  }, [query]);

  return (
    <div className="App">
      <h1>Search Something</h1>
      <p>{query}</p>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        value={query}
        onChange={(val) => setQuery(val)}
        suggestions={suggestions}
      />
    </div>
  );
}
