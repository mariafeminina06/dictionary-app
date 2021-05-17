import axios from "axios";
import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState(null);

  function handleSearch(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${query}`;
    axios.get(apiUrl).then(handleSearch);
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="search-form">
        <form onSubmit={search} className="input-group mb-3">
          <input
            type="search"
            autoFocus={true}
            onChange={updateQuery}
            className="form-control"
            placeholder="Enter word to locate meaning"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <i className="fas fa-search"></i> Search
          </button>
        </form>
      </div>
    </div>
  );
}
