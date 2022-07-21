import MovieListElement from "./MovieListElement";

function MovieList(props) {

  const {movieList} = props;

  return (
    <>
    {movieList && movieList.map((movie, index) => <MovieListElement {...movie} key={index} />)}
    </>
  );
}

export default MovieList;