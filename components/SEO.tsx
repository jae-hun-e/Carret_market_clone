import type { NextComponentType } from "Next";
import Head from "next/head";
import { NextPage } from "next";

export default function SEO({ title }: { title: string }): JSX.Element {
  return (
    <Head>
      <title>{title} | CupidWel</title>
    </Head>
  );
}
