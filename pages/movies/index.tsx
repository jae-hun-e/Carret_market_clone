import { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

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
      } = await axios.get("/api/movies");
      console.log(results);
      setMovies(results);
    })();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-2">
      {movies &&
        movies.map((data) => (
          <div key={data.id} className="m-5 text-center">
            {/*Image로 변경*/}
            <img
              src={`${BASE_IMAGE}/${data.poster_path}`}
              className="w-full h-full rounded-2xl
                      hover:animate-pulse"
            />
            <p className=" text-xm">{data.title}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
