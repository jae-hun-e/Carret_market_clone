import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import SEO from "../../../components/SEO";

type Param = string | string[] | undefined;

const CatchAll: NextPage = () => {
  const {
    query: { param },
  }: NextRouter = useRouter();

  const [paramData, setParamData] = useState<Param>();
  useEffect(() => {
    if (typeof param !== "string" && typeof param !== "undefined") {
      const [title, id] = param;
      setParamData((paramData) => [title, id]);
    }
  }, [param]);

  return (
    <div>
      <SEO
        title={typeof paramData !== "undefined" ? paramData?.[0] : "undefined"}
      ></SEO>
      URL param 모두 catch할 수 있음
      {typeof param !== "string" &&
        param?.map((data: string, idx: number) => (
          <span key={idx}>{data}</span>
        ))}
    </div>
  );
};

export default CatchAll;
