"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { Input } from "../ui/input";

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="flex my-4">
      <Input
        className="flex-1 w-full"
        placeholder="Type something..."
        autoFocus
        onChange={(e) => {
          router.push(pathname + "?" + createQueryString("q", e.target.value));
        }}
      />
    </div>
  );
};

export default SearchInput;
