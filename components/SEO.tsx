import type {} from "Next";
import Head from "next/head";

export default function SEO({ title }: any): any {
  return (
    <Head>
      <title>{title} | CupidWel</title>
    </Head>
  );
}
