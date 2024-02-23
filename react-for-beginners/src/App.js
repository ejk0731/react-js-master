/* 
  *** fetch.then 
    fetch로 리소스를 비동기 요청, API를 호출하고 응답 데이터를 받아오는 데에 주로 사용
    (비동기 처리 - 시간이 소요되는 작업이 완료될 때까지 계속 기다리지 않고 따로 처리하며, 
    일단 다른 코드들도 먼저 실행할 수 있게끔 하는 작업 => 처리 순서가 정확히 보장되지 않음)

    비동기 처리로 얻은 데이터를 이용해야 하는 부분이 있을 경우, 
    비동기 처리가 모두 완료된 뒤에 변수 등 초기화 작업을 진행하는 등 비동기 작업의 흐름을 제어해야함
    callback 함수 를 사용한 비동기 작업 처리 => 콜백함수가 클로저로 사용됨, 콜백지옥에 빠질 수 있음.....
  
  *** async-await
    함수는 fetch를 통해 호출한 API로부터 응답 데이터 받고 JSON 파싱하여 리턴하는 부분만 담당합니다
    await는 비동기 작업의 결과값을 얻을 때까지 기다려줌
        - await 는 Promise 객체를 리턴하는 부분 앞에만 붙일 수 있습니다. 
          이 때, fetch API를 통해 받은 response 데이터는 Promise 객체라서 사용이 가능
        - await를 함수 내에서 사용하려면 그 함수에는 반드시 async 키워드가 붙어 있어야함
    콜백 함수를 작성할 필요 없이 거의 동기식 코드를 짜는 것처럼 작성할 수 있음
*/

import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // 1.
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    // );
    // const json = await response.json();
    // setMovies(json.data.movies);
    // setLoading(false);

    // 2. await 감싸는 await
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => {
          return (
            <Movie
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          );
        })
      )}
    </>
  );
}

export default App;
