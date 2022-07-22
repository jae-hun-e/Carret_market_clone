import type { NextPage } from "next";
import NavBar from "../../components/NavBar";

const Input: NextPage = () => {
  return (
    <>
      <NavBar />

      <form
        className="flex flex-col text-center bg-gray-400 space-y-3 p-4
    focus-within:bg-blue-200"
      >
        <input
          type="text"
          placeholder="UserName"
          required
          className="rounded-xl
        required:border-2 border-red-500
        invalid:bg-red-300
        placeholder-red-400
        placeholder-shown:bg-yellow-300
        disabled: opacity-0
        required:bg-purple-300"
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="bg-gray-200 rounded-md"
        />
        <input
          type="submit"
          value="Login"
          className="bg-blue-600 text-white rounded-xl w-60 m-auto"
        />
      </form>
    </>
  );
};

export default Input;
