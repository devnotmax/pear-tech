import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
