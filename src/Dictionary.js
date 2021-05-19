import axios from "axios";
import React, { useState } from "react";
import Data from "./Data";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState("dictionary");
  let [data, setData] = useState({
    loaded: false,
  });
  let [photos, setPhotos] = useState(null);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${query}`;
    axios.get(apiUrl).then(getData);

    let pexelsApiKey =
      "563492ad6f9170000100000101abed1dca4840adb81bc26316937fba";
    let pexelsUrl = ` https://api.pexels.com/v1/search?query=${query}&per_page=8`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelResponse);
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

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
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
        <Photos photos={photos} alt={query} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
