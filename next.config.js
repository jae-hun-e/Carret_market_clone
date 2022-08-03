/** @type {import('next').NextConfig} */

const API_KEY = process.env["API_KEY"];
const BASE_URL = "https://api.themoviedb.org/3";

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/tmp/:id*", // 받은 URL, *는 뒤에 내용 모두 캐치
        destination: "/:id*", // 보내 줄 URL
        permanent: true, // 캐시에 저장할 것인지
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko`,
      },
      {
        source: "/api/movies/:id",
        destination: `${BASE_URL}/movie/:id?api_key=${API_KEY}&language=ko`,
      },
    ];
  },
};

module.exports = nextConfig;
