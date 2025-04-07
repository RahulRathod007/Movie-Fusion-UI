import React, { useEffect, useState } from "react";
import { fetchMovies } from "../pages/api";
import MovieList from "../components/MovieList";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies("popular")
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.error("Failed to fetch popular movies:", err);
        setError("Failed to load popular movies. Please try again later.");
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-muted">Popular Movies</h1>
      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Popular;
