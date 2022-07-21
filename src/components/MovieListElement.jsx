function MovieListElement(props) {
  const {title, img_url, description} = props;

  return(
    <div>
      <img alt="movie" src={img_url}/>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MovieListElement;