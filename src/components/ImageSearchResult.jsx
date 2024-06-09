import Image from "next/image";
import Link from "next/link";

const ImageSearchResult = ({ results }) => {
  return (
    <div className="pb-20 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 gap-3">
        {results.items.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <Link href={result.image?.contextLink || "#"} passHref>
                <div>
                  <Image
                    src={result?.link}
                    alt={result.title}
                    width={300}
                    height={180}
                    className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300 rounded"
                  />
                </div>
              </Link>
              <Link href={result.image?.contextLink || "#"} passHref>
                <p className="group-hover:underline truncate text-xl cursor-pointer">
                  {result.title}
                </p>
              </Link>
              <Link href={result.image?.contextLink || "#"} passHref>
                <p className="group-hover:underline truncate text-slate-400 cursor-pointer">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearchResult;
