import type { NextPage } from "Next";

const manyInput: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-4">
      <input
        type="text"
        required
        placeholder="UserName"
        className="border-2 border-gray-400 p-1 rounded-2xl
        peer"
      />
      <span
        className="hidden
      peer-invalid:text-red-500
      peer-invalid:block"
      >
        This input is invalid
      </span>
      <input type="submit" value="Login" className="hidden peer-valid:block" />
    </div>
  );
};

export default manyInput;
