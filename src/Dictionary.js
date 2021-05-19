import axios from "axios";
import React, { useState } from "react";
import Data from "./Data";

import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState("dictionary");
  let [data, setData] = useState({
    loaded: false,
  });

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${query}`;
    axios.get(apiUrl).then(getData);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  function getData(response) {
    setData({
      result: response.data[0],
      loaded: true,
    });
  }

  let searchForm = (
    <div className="search-form">
      <form onSubmit={handleSearch} className="input-group mb-3">
        <input
          type="search"
          autoFocus={true}
          onChange={updateQuery}
          className="form-control"
          placeholder="Enter word to locate meaning"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          <i className="fas fa-search"></i> Search
        </button>
      </form>
    </div>
  );

  if (data.loaded) {
    return (
      <div className="Dictionary">
        {searchForm}
        <Data data={data.result} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
