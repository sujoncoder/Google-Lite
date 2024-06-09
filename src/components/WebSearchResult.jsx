import Parser from "html-react-parser";
import Link from "next/link";

const WebSearchResult = ({ results }) => {
  console.log(results);
  return (
    <div className="w-full mx-auto px-4 pb-20 sm:pl-[5%] md:pl-[14%] lg:pl-[50]">
      <h1>{results?.title}</h1>
      <p className="my-4 text-slate-400 text-sm">
        about {results?.searchInformation?.formattedTotalResults} results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results?.items?.map((result) => (
        <div className="mb-8" key={result.link}>
          <div className="group flex flex-col text-slate-500">
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link
              className="group-hover:underline decoration-blue-500 text-xl truncate font-medium text-blue-500"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-slate-500 ">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
};

export default WebSearchResult;
