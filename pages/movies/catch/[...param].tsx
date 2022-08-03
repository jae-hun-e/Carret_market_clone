import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";

interface IRouter extends NextRouter {
  query: { param: any[] };
}

const CatchAll: NextPage = () => {
  const {
    query: { param },
  }: NextRouter = useRouter();
  return (
    <div className="flex justify-center items-center mt-10 text-2xl">
      URL param 모두 catch할 수 있음
      {typeof param !== "string" &&
        param?.map((data: string, idx: number) => (
          <span key={idx}>{data}</span>
        ))}
    </div>
  );
};

export default CatchAll;
