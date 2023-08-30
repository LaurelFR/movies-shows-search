import React from "react";

export default function MediaInfo(props) {
  return (
    <div className="MediaInfo">
      <div className="mt-5 row results">
        <div className="col-6">
          <img
            src={props.data.image}
            alt="movie poster"
            className="img-fluid rounded mb-3"
          />
          <h2>{props.data.title}</h2>
          <p className="text-capitalize">{props.data.type}</p>
          <p>{props.data.year}</p>
        </div>
        <div className="col-6">
          <img
            src="https://cdn.watchmode.com/posters/03173903_poster_w185.jpg"
            alt="movie poster"
            className="img-fluid rounded mb-3"
          />
          <h2>Breaking Bad</h2>
          <p>TV Series</p>
          <p>2008</p>
        </div>
      </div>
    </div>
  );
}
