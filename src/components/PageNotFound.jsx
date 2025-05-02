import { useState, useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  useEffect(() => {
    count == 0 ? window.location.replace("/") : null;
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-16 w-96 h-96 bg-purple-700 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-16 w-64 h-64 bg-indigo-600 opacity-30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        <div className="relative mb-4">
          <h1 className="text-8xl font-extrabold text-purple-500 mb-2">404</h1>
          <div className="absolute -inset-0.5 bg-purple-500 opacity-30 blur-md animate-pulse"></div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-100">
          Page Not Found
        </h2>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved to another
          location.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all text-white font-medium"
          >
            <Home size={18} />
            <span>Back Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center cursor-pointer gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-all text-white font-medium"
          >
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Redirecting to homepage in {count} seconds...
        </p>
      </div>

      <div className="w-full max-w-md mt-12 relative z-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for content..."
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
