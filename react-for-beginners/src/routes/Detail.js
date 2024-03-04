import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
  };
  console.log(movieDetail.title);
  useEffect(() => {
    getMovie();
  }, []);
  console.log(id);
  return (
    <>
      <h1>{movieDetail.title}</h1>
      <span>{movieDetail.rating}</span>
    </>
  );
}
export default Detail;
