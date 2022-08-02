import type { NextPage } from "next";
import NavBar from "../../components/NavBar";
import SEO from "../../components/SEO";

const manyTag: NextPage = () => {
  return (
    <>
      <SEO title="manyTag" />
      <div className="p-5">
        <details className="open:text-white open:bg-blue-500">
          <summary className="select-none cursor-pointer">
            What is my fav. food
          </summary>
          <div>닭갈비</div>
          <span className="selection:bg-indigo-600 selection:text-white">
            치즈
          </span>
        </details>
        <ul className="flex flex-col space-y-2 p-3 list-disc marker:text-teal-500">
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
        <input
          type="file"
          className="file:border-0 file:rounded-xl file:bg-purple-300 file:text-white
        file:px-2 file:cursor-pointer file:transition-colors  file:hover:bg-blue-800 file:hover:text-yellow-300"
        />
        <p className="first-letter:text-8xl first-letter:hover:text-purple-400">
          Hello
        </p>
      </div>
    </>
  );
};

export default manyTag;
