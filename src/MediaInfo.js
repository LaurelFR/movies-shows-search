import React, { useState } from "react";
import MediaStreaming from "./MediaStreaming";

export default function MediaInfo(props) {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState("");

  function handleClick(event) {
    event.preventDefault();
    console.log(id);
    setClicked(true);
  }

  if (props.error) {
    return (
      <div className="MediaInfo">
        <div className="mt-5 results error">
          No results found. Please try again.
        </div>
      </div>
    );
  } else if (clicked) {
    return <MediaStreaming id={id} />;
  } else
    return (
      <div className="MediaInfo">
        <div className="mt-5 row results">
          {props.data.data.map(function (result, index) {
            if (index < 18) {
              return (
                <div className="col-4 mb-5" key={index}>
                  <div onClick={handleClick}>
                    <img
                      src={result.image_url}
                      alt="movie poster"
                      className="img-fluid rounded mb-3"
                    />
                    <h2>{result.name}</h2>
                  </div>
                  <p className="text-capitalize">{result.tmdb_type}</p>
                  <p>{result.year}</p>
                  <p>{result.id}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
}
