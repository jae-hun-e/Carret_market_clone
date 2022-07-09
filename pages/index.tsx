import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-10 px-5 grid gap-5 space-y-5  min-h-screen ">
      <div className="bg-white p-5 rounded-3xl shadow-2xl">
        <span className="font-semibold text-2xl ">TailWindCSS</span>
        <div className="flex justify-between">
          <span className="text-gray-500">Item1</span>
          <span className="font-semibold">$2</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Item3</span>
          <span className="font-semibold">$4</span>
        </div>
        <div className=" flex justify-between  my-2 pt-2 border-t-2 border-dashed">
          <span>Item5</span>
          <span className="font-semibold">$6</span>
        </div>
        <div className="mt-3 bg-blue-600 p-2 text-white text-center rounded-2xl w-1/2 mx-auto">
          Check out
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-2xl">
        <div className="bg-blue-500 p-4 pb-10">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-2xl relative -top-5 bg-white p-4">
          <div className="flex items-end justify-between relative -top-14">
            <div className=" flex flex-col items-center">
              <span className="text-gray-400 pt-3 text-sm">Orders</span>
              <span className="font-medium  text-sm ">340</span>
            </div>
            <div className="w-20 h-20 bg-blue-300 rounded-full"></div>
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
      <div className="bg-white p-4 rounded-3xl shadow-2xl">
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
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
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
      <div className="bg-white p-4 rounded-3xl shadow-2xl"></div>
    </div>
  );
};

export default Home;
