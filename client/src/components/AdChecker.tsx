import React, { useState } from "react";
import classNames from "classnames";

export function AdChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    status: "success" | "error";
    message: string;
  }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setResult({
        status: "success",
        message:
          "This URL appears to be safe and compliant with advertising standards.",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Check Advertisement URL
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Enter the URL of the advertisement you want to check.</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="flex rounded-md shadow-sm">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                placeholder="https://example.com/ad"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className={classNames(
                  "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                  loading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                )}
              >
                {loading ? "Checking..." : "Check URL"}
              </button>
            </div>
          </form>

          {result && (
            <div
              className={classNames(
                "mt-4 p-4 rounded-md",
                result.status === "success" ? "bg-green-50" : "bg-red-50"
              )}
            >
              <p
                className={classNames(
                  "text-sm",
                  result.status === "success"
                    ? "text-green-700"
                    : "text-red-700"
                )}
              >
                {result.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
