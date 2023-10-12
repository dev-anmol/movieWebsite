import React from "react";

function Movies({title, year, img}) {
  return (
    <div className="movie">
      <img src={img} alt="" />
      <p>{title}</p>
      <p>Year: {year}</p>

    </div>
  );
}

export default Movies;
