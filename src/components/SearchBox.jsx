"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMicOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-100 px-4 py-3 w-full rounded-full shadow ml-0 sm:ml-10 mr-5 max-w-3xl"
    >
      <input
        type="text"
        className="w-full outline-none"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        onClick={() => setTerm("")}
        className="text-4xl text-slate-500 cursor-pointer"
      />
      <IoMicOutline className="text-4xl text-blue-500 border-l-2 mx-3" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="hidden sm:inline-flex text-blue-500 text-4xl cursor-pointer"
      />
    </form>
  );
};

export default SearchBox;
