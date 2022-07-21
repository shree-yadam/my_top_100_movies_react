import "./MovieListElement.css";

function MovieListElement(props) {
  const {title, img_url, description} = props;

  return(
    <div className="movie-div">
      <div className="movie-img-div">
        <img alt="movie" src={img_url} className="movie-img" />
      </div>
      <div className="movie-details">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default MovieListElement;