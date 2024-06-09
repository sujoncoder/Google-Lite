"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const AdditionBtn = ({ onSubmit }) => {
  const [searchrandomLoading, setSearchRandomLoading] = useState(false);
  const router = useRouter();
  const handleRandomWord = async (e) => {
    setSearchRandomLoading(true);
    e.preventDefault();
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    router.push(`/search/web?searchTerm=${data}`);
  };

  return (
    <div className="flex flex-col space-y-4 mt-8 sm:flex-row sm:space-y-0 sm:space-x-4">
      <button
        onClick={onSubmit}
        className="bg-slate-100 text-slate-500 rounded-md w-36 h-10 hover:bg-slate-200 duration-300"
      >
        Google Search
      </button>
      <button
        onClick={handleRandomWord}
        className="bg-slate-100 text-slate-500 rounded-md w-36 h-10 hover:bg-slate-200 duration-300"
      >
        {searchrandomLoading ? "loading" : "I,m feeling lucky"}
      </button>
    </div>
  );
};

export default AdditionBtn;
