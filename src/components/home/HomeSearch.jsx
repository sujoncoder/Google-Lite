"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import AdditionBtn from "./AdditionBtn";

const HomeSearch = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-between mt-5 mx-auto max-w-[90%] border border-slate-200 rounded-full px-4 py-3 sm:py-4 hover:shadow-md focus-within:shadow-md duration-300 sm:max-w-xl lg:max-w-2xl"
      >
        <GoSearch className="text-slate-500 text-2xl" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full focus:outline-none px-4"
        />
        <FaMicrophoneAlt className="text-slate-500 text-2xl" />
      </form>
      <AdditionBtn onSubmit={handleSubmit} />
    </>
  );
};

export default HomeSearch;
