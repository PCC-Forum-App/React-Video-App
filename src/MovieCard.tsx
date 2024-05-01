import React from "react";

interface Props {
  movie: {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  };
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Poster}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
