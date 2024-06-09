import Image from "next/image";
import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import SearchHeaderOption from "./SearchHeaderOption";

const SearchHeader = () => {
  return (
    <header className="sticky to-0 bg-white">
      <div className="flex w-full justify-between items-center p-6 ">
        <div className="flex justify-between items-center space-x-4">
          <Link href="/">
            <Image
              className="flex justify-center items-center"
              src="https://static-00.iconduck.com/assets.00/google-icon-2048x673-w3o7skkh.png"
              width={120}
              height={40}
              alt="Google image"
            />
          </Link>

          <div>
            <SearchBox />
          </div>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <div className="hidden md:inline-flex space-x-2">
            <IoSettingsOutline className="w-10 h-10 bg-transparent text-slate-500 hover:bg-slate-200 rounded-full p-2 duration-300" />
            <CgMenuGridR className="w-10 h-10 bg-transparent text-slate-500 hover:bg-slate-200 rounded-full p-2 duration-300" />
          </div>

          <button className="bg-blue-500 px-4 py-2 text-white rounded-md hover:brightness-110 hover:shadow active:bg-blue-600 duration-300">
            Sign In
          </button>
        </div>
      </div>

      <SearchHeaderOption />
    </header>
  );
};

export default SearchHeader;
