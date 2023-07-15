import React from "react";
import SearchResultItem from "./SearchResultItem";

async function getData(q: string) {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev
    ? "http://localhost:3000"
    : "https://your_deployment.server.com";

  const res = await fetch(`http://localhost:3000/api/?q=${q}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SearchResults = async ({ q }: any) => {
  const data = await getData(q);

  return (
    <div>
      <div className="mb-4 text-sm text-gray-500">
        <span className="font-semibold">{data.length} posts </span>were found.
      </div>
      <div className="grid gap-y-4">
        {data?.map((item: any, index: number) => (
          <SearchResultItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
