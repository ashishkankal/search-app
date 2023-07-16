import React, { useEffect, useState } from "react";
import SearchResultItem from "./SearchResultItem";
import { useSearchParams } from "next/navigation";

async function getData(q: string) {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev ? "http://localhost:3000" : "";

  const res = await fetch(`${server}/api/get?q=${q}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const useSearch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  useEffect(() => {
    setIsLoading(true);
    getData(q)
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  return { data, isLoading };
};

const SearchResults = ({ q }: any) => {
  const { data = [], isLoading } = useSearch();
  return (
    <div>
      {q && (
        <div className="mb-4 text-sm text-gray-500">
          {isLoading ? (
            "Loading..."
          ) : (
            <>
              <span className="font-semibold">
                {data.length} post{data.length !== 1 && "s"}{" "}
              </span>
              were found.
            </>
          )}
        </div>
      )}
      <div className="grid gap-y-4">
        {data?.map((item: any, index: number) => (
          <SearchResultItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
