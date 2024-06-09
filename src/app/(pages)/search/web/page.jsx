import WebSearchResult from "@/components/WebSearchResult";
import Link from "next/link";

const WebPages = async ({ searchParams }) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_ENGINE_API}&cx=${process.env.GOOGLE_CSX}&q=${searchParams.searchTerm}`
  );
  const data = await response.json();
  const results = data.items;
  console.log(results);

  if (!results) {
    return (
      <div className="flex flex-col space-y-4 justify-center items-center my-10">
        <h1 className="text-3xl font-semibold text-pink-500">
          Opps this result not found {searchParams.searchTerm}!
        </h1>
        <p className="text-2xl text-slate-500">
          Back to{" "}
          <Link className="text-blue-500 hover:underline duration-300" href="/">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <div>{results && <WebSearchResult results={data} />}</div>;
};

export default WebPages;
