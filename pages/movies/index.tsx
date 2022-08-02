import { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "e3ffb6091393154ff4a81caaf0b29666";
const BASE_URL = "https://api.themoviedb.org/3";
const POPULAR = "/movie/popular";

interface IPopularMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Home: NextPage = () => {
  const [movies, setMovies] = useState<IPopularMovies[]>([]);

  useEffect(() => {
    // (async ()=>{})()
    (async () => {
      const {
        data: { results },
      } = await axios.get(
        `${BASE_URL}${POPULAR}?api_key=${API_KEY}&language=ko`
      );
      // console.log(results);
      setMovies(results);
    })();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-2">
      {movies.map((data) => (
        <div
          key={data.id}
          className="m-5 bg-teal-300 w-40 h-40 rounded-2xl flex justify-center"
        >
          <p>{data.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
