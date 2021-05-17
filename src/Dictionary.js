import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${query}`);
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="search-form">
        <form onSubmit={search} className="input-group mb-3">
          <input
            type="search"
            autoFocus={true}
            onChange={handleQuery}
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
