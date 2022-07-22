import Link from "next/link";

export default function NavBar(): any {
  return (
    <nav className="flex gap-2 text-2xl justify-center text-purple-200">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/htmlTag/manyTag">
        <a>manyTag</a>
      </Link>
      <Link href="/input/peerInput">
        <a>peerInput</a>
      </Link>
      <Link href="/input/userInput">
        <a>userInput</a>
      </Link>
    </nav>
  );
}
