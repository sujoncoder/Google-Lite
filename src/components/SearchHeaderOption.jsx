"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";

const SearchHeaderOption = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathName = usePathname();

  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };
  return (
    <div className="flex space-x-6 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-slate-700 text-lg">
      <div
        onClick={() => selectTab("all")}
        className={`text-slate-500 flex space-x-1 items-center border-b-4 border-transparent active:text-blue-500 cursor-pointer ${
          pathName === "/search/web" && "!text-blue-600 !border-blue-500"
        }`}
      >
        <AiOutlineSearch />
        <p>All</p>
      </div>

      <div
        onClick={() => selectTab("images")}
        className={`text-slate-500 flex space-x-1 items-center border-b-4 border-transparent active:text-blue-500 cursor-pointer ${
          pathName === "/search/image" && "!text-blue-600 !border-blue-500"
        }`}
      >
        <FaCamera />
        <p>Images</p>
      </div>
    </div>
  );
};

export default SearchHeaderOption;
