import React, { useState } from "react";
import axios from "axios";

import MediaInfo from "./MediaInfo";
import "./Media.css";

export default function Media(props) {
  const [mediaData, setMediaData] = useState({ ready: false });
  const [mediaSearch, setmediaSearch] = useState(props.defaultMedia);

  function handleResponse(response) {
    console.log(response.data.results[0].type);
    setMediaData({
      ready: true,
      title: response.data.results[0].name,
      year: response.data.results[0].year,
      image: response.data.results[0].image_url,
      type: response.data.results[0].tmdb_type,
    });
  }

  function search() {
    const apiKey = "SGfHVtB1SJqvdmLgoO4wND3nxPSvl6xH8RR2LqRw";
    let apiUrl = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${apiKey}&search_value=${mediaSearch}&search_type=1`;
    axios.get(apiUrl).then(handleResponse);
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
          Search for your favorite actors, movies, or TV shows!
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
        <MediaInfo data={mediaData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
