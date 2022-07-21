import MovieListElement from "./MovieListElement";

function MovieList(props) {

  const {movieList} = props;

  return (
    <>
    {movieList && movieList.map(movie => <MovieListElement {...movie}/>)}
    </>
  );
}

export default MovieList;