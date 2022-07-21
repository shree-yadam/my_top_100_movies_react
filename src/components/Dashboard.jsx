import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";

function Dashboard() {
  const [movieList, setMovieList] = useState();
  useEffect(() => {
    axios.get("http://localhost:8080/movies")
    .then(res => {
      setMovieList(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <>
    {movieList && <MovieList movieList={movieList}/> }
    </>
  );
}

export default Dashboard;