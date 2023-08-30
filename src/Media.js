import React from "react";

import "./Media.css";

export default function Media() {
  return (
    <div className="Media">
      <h1 className="text-center">
        Search for your favorite actors, movies, or TV shows!
      </h1>
      <form>
        <div className="d-flex justify-content-center">
          <input
            type="search"
            placeholder="Search"
            className="form-control search-box"
            autoFocus="on"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary search"
          />
        </div>
      </form>
    </div>
  );
}
