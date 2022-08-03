import { NextPage } from "next";
import { useRouter } from "next/router";

const Detail: NextPage = () => {
  const router = useRouter();
  console.log(router);
  return <h3>movie-ID : {router.query.id} detail Page</h3>;
};

export default Detail;
