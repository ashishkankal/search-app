"use client";
import SearchInput from "@/components/search/SearchInput";
import SearchResults from "@/components/search/SearchResults";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  return (
    <main className="flex min-h-screen max-w-3xl mx-auto flex-col p-24">
      <h1 className="mt-5 font-display text-4xl text-center font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
        Search with{" "}
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          ease
        </span>
      </h1>
      <SearchInput />
      <SearchResults q={searchParams.get("q")} />
    </main>
  );
}
