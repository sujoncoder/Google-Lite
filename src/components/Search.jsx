import { FaMicrophoneAlt } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <form className="flex w-full justify-between mt-5 mx-auto max-w-[90%] border border-slate-200 rounded-full px-4 py-3 sm:py-4 hover:shadow-md focus-within:shadow-md duration-300 sm:max-w-xl lg:max-w-2xl">
      <GoSearch className="text-slate-500 text-2xl" />
      <input type="text" className="w-full focus:outline-none px-4" />
      <FaMicrophoneAlt className="text-slate-500 text-2xl" />
    </form>
  );
};

export default Search;
