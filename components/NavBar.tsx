import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next";

export default function NavBar(): JSX.Element {
  const router = useRouter();
  // console.log(router);
  return (
    <nav className="flex gap-2 text-2xl justify-center text-purple-200">
      <Image src="/favicon.ico" width="30" height="30" />
      <Link href="/">
        <a
          className={
            router.pathname === "/" ? "text-yellow-300" : "text-purple-400"
          }
        >
          Home
        </a>
      </Link>
      <Link href="/htmlTag/manyTag">
        <a
          className={
            router.pathname === "/htmlTag/manyTag"
              ? "text-yellow-300"
              : "text-purple-400"
          }
        >
          manyTag
        </a>
      </Link>
      <Link href="/input/peerInput">
        <a
          className={
            router.pathname === "/input/peerInput"
              ? "text-yellow-300"
              : "text-purple-400"
          }
        >
          peerInput
        </a>
      </Link>
      <Link href="/input/userInput">
        <a
          className={
            router.pathname === "/input/userInput"
              ? "text-yellow-300"
              : "text-purple-400"
          }
        >
          userInput
        </a>
      </Link>
      <Link href="/movies">
        <a
          className={
            router.pathname === "/movies"
              ? "text-yellow-300"
              : "text-purple-400"
          }
        >
          movies
        </a>
      </Link>
    </nav>
  );
}
