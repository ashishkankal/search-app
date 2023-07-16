"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const SearchInput = ({ className }: any) => {
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
    <div className={cn(className, "flex my-4 space-x-2")}>
      <Input
        className="flex-1 w-full"
        placeholder="Type something..."
        autoFocus
        onChange={(e) => {
          router.push(pathname + "?" + createQueryString("q", e.target.value));
        }}
        defaultValue={searchParams.get("q") || ""}
      />
      <Button>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchInput;
