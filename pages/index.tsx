import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
      className="bg-slate-400 py-10 px-5 grid gap-5 space-y-5 min-h-screen
                    sm:grid-cols-2 sm:place-content-center
                    lg:grid-cols-3 lg:space-x-10 lg:m-auto lg:w-screen
                    dark:bg-teal-200"
    >
      {/*1번 layout*/}
      <div
        className="bg-white p-5 rounded-3xl shadow-2xl
        sm:bg-red-500
        lg:bg-teal-300
      "
      >
        <span className="font-semibold text-2xl ">TailWindCSS</span>
        <ul>
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex justify-between first:bg-amber-200 last:bg-blue-200 even:bg-purple-300"
            >
              <span className="text-gray-500">Item1</span>
              <span className="font-semibold">$2</span>
            </div>
          ))}
        </ul>
        {["a", "b", "c", "d", ""].map((c, i) => (
          <li key={i} className="bg-red-300 p-1 empty:hidden">
            {c}
          </li>
        ))}
        <div className="flex justify-between">
          <span className="text-gray-500">Item2</span>
          <span className="font-semibold">$4</span>
        </div>
        <div className=" flex justify-between  my-2 pt-2 border-t-2 border-dashed">
          <span>Item5</span>
          <span className="font-semibold">$6</span>
        </div>
        <div className="flex">
          <button
            className="mt-3 bg-blue-600 p-2 text-white text-center rounded-2xl w-1/2 mx-auto
              hover:bg-red-400 hover:text-black
              active:bg-yellow-200
              focus:text-red-500"
          >
            Check out
          </button>
        </div>
      </div>
      {/*2번 layout*/}
      <div
        className="bg-white overflow-hidden rounded-3xl shadow-2xl
      group"
      >
        <div className="bg-blue-500 p-4 pb-10">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-2xl relative -top-5 bg-white p-4">
          <div className="flex items-end justify-between relative -top-14">
            <div className=" flex flex-col items-center">
              <span className="text-gray-400 pt-3 text-sm">Orders</span>
              <span className="font-medium  text-sm ">340</span>
            </div>
            <div
              className="w-20 h-20 bg-blue-300 rounded-full
            group-hover:bg-purple-300 group-active:bg-yellow-300
            transition-colors"
            />
            <div className=" flex flex-col items-center">
              <span className="text-gray-400 pt-3 text-sm">Spent</span>
              <span className="font-medium text-sm  ">$2,310</span>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col  relative -top-10 -mt-10 -mb-5">
          <span className="text-xl font-medium">Jo JaeHun</span>
          <span className="text-sm text-gray-400">한국</span>
        </div>
      </div>
      {/*3번 layout*/}
      <div
        className="bg-white p-4 rounded-3xl shadow-2xl
                      sm:col-span-2"
      >
        <div className="flex justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️4.9</span>
            <span className="shadow-2xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72" />
        <div className="flex flex-col ">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="font-light text-gray-400">Chair</span>
        </div>
        <div className="font-medium text-xl">
          <div className="flex flex-row justify-between">
            <div className="mt-1 mb-2 space-x-3">
              <button
                className="w-5 h-5 rounded-full bg-yellow-500
              focus:ring-2 ring-offset-2 ring-yellow-200
              transition"
              />
              <button
                className="w-5 h-5 rounded-full bg-blue-400
              focus:ring-2 ring-offset-2 ring-blue-200"
              />
              <button
                className="w-5 h-5 rounded-full bg-red-400
              focus:ring-2 ring-offset-2 ring-red-200"
              />
            </div>
            <div className="flex justify-end items-center space-x-4">
              <button className=" bg-gray-300 rounded-xl aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className=" bg-gray-300 rounded-xl aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between text-center">
            <span>$450</span>
            <button className="bg-blue-600 rounded-2xl text-white text-xs p-1 px-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
