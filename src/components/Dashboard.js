import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [movieList, setMovieList] = useState();
  useEffect(() => {
    axios.get("http://localhost:8080/movies")
    .then(res => {
      setMovieList(res.data.results);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <>
    {movieList && movieList.map(m => <p>{m.title}</p>)}
    </>
  );
}

export default Dashboard;