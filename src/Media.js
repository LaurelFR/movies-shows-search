import React, { useState } from "react";
import axios from "axios";

import MediaInfo from "./MediaInfo";
import "./Media.css";

export default function Media(props) {
  const [mediaData, setMediaData] = useState({ ready: false });
  const [mediaSearch, setmediaSearch] = useState(props.defaultMedia);
  const [error, setError] = useState(false);

  function handleResponse(response) {
    if (response.data.results.length === 0) {
      setError(true);
      return;
    }
    setError(false);
    setMediaData({
      ready: true,
      data: response.data.results,
    });
  }

  function search() {
    const apiKey = "SGfHVtB1SJqvdmLgoO4wND3nxPSvl6xH8RR2LqRw";
    let apiUrl = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${apiKey}&search_value=${mediaSearch}&search_type=2`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => setError(true));
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleMediaChange(event) {
    setmediaSearch(event.target.value);
  }

  if (mediaData.ready) {
    return (
      <div className="Media">
        <h1 className="text-center mb-5">
          Search for your favorite movies and TV shows!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <input
              type="search"
              placeholder="Search"
              className="form-control search-box"
              autoFocus="on"
              onChange={handleMediaChange}
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary search"
            />
          </div>
        </form>
        <MediaInfo data={mediaData} error={error} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
