import ImageSearchResult from "@/components/ImageSearchResult";
import Link from "next/link";

const SearchImagePages = async ({ searchParams }) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_ENGINE_API}&cx=${process.env.GOOGLE_CSX}&q=${searchParams.searchTerm}&searchType=image`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const results = data.items;

    if (!results || results.length === 0) {
      return (
        <div className="flex flex-col space-y-4 justify-center items-center my-10">
          <h1 className="text-3xl font-semibold text-pink-500">
            Oops, no results found for {searchParams.searchTerm}!
          </h1>
          <p className="text-2xl text-slate-500">
            Back to{" "}
            <Link
              className="text-blue-500 hover:underline duration-300"
              href="/"
            >
              Home
            </Link>
          </p>
        </div>
      );
    }

    return <ImageSearchResult results={data} />;
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="flex flex-col space-y-4 justify-center items-center my-10">
        <h1 className="text-3xl font-semibold text-pink-500">
          An error occurred while fetching the data.
        </h1>
        <p className="text-2xl text-slate-500">
          Please try again later or go back to{" "}
          <Link className="text-blue-500 hover:underline duration-300" href="/">
            Home
          </Link>
        </p>
      </div>
    );
  }
};

export default SearchImagePages;
