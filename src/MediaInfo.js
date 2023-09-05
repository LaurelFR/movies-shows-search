import React from "react";

export default function MediaInfo(props) {
  return (
    <div className="MediaInfo">
      <div className="mt-5 row results">
        {props.data.data.map(function (result, index) {
          if (index < 9) {
            return (
              <div className="col-4 mb-5" key={index}>
                <img
                  src={result.image_url}
                  alt="movie poster"
                  className="img-fluid rounded mb-3"
                />
                <h2>{result.name}</h2>
                <p className="text-capitalize">{result.tmdb_type}</p>
                <p>{result.year}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
