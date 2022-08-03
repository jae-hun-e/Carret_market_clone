import { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

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

const Home: NextPage = ({ results }: any) => {
  // const [movies, setMovies] = useState<IPopularMovies[]>([]);
  //
  // useEffect(() => {
  //   // (async ()=>{})()
  //   (async () => {
  //     const {
  //       data: { results },
  //     } = await axios.get("/api/movies");
  //     console.log(results);
  //     setMovies(results);
  //   })();
  // }, []);
  const router = useRouter();
  const onClick = (id: number) => {
    // 자동으로 페이지넘기는 방법
    router.push(`movies/${id}`).then((r) => console.log(r));
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {!results && <h4>Loading...</h4>}
      {results?.map((data: IPopularMovies) => (
        <Link
          key={data.id}
          href={{
            pathname: `movies/${data.id}`,
            query: { title: data.original_title },
          }}
          as={`movies/${data.id}`}
        >
          <div className="m-5 text-center">
            {/*Image로 변경*/}
            <img
              src={`${BASE_IMAGE}/${data.poster_path}`}
              className="w-full h-full rounded-2xl
                      hover:animate-pulse"
            />
            <p className=" text-xm">{data.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;

// client가 아니라 server쪽에서만 돌아가는 코드
export async function getServerSideProps() {
  const {
    data: { results },
  } = await axios.get("http://localhost:3000/api/movies");
  return {
    props: {
      results,
    },
  };
}
