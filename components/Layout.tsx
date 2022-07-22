import type { NextComponentType } from "Next";
import NavBar from "./NavBar";

export default function Layout({ children }: any): JSX.Element {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
