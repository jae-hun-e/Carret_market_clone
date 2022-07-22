import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(): any {
  const router = useRouter();
  console.log(router);
  return (
    <nav className="flex gap-2 text-2xl justify-center text-purple-200">
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
    </nav>
  );
}
