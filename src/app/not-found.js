"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 p-4">
      <div className="text-center bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-8xl font-extrabold text-blue-600 mb-4 animate-bounce">
          404
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300"
          >
            Go Home
          </Link>
          <Link
            href="javascript:history.back()"
            className="px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-500 transition duration-300"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
