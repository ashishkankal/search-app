"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useSearchParams } from "next/navigation";

export interface SearchResultItemProps {
  title: string;
  content: string;
  createdAt: any;
  author: string;
}

export function getHighlightedText(text: string, highlight: any) {
  if (!highlight) {
    return text;
  }
  const parts = text.split(new RegExp(`(${String(highlight)})`, "gi"));
  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? { backgroundColor: "yellow" }
              : {}
          }
        >
          {part}
        </span>
      ))}{" "}
    </span>
  );
}

const SearchResultItem = ({
  title,
  content,
  createdAt,
  author,
}: SearchResultItemProps) => {
  const searchParams = useSearchParams();

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {getHighlightedText(title, searchParams.get("q"))}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {content && (
          <CardDescription>
            {getHighlightedText(content, searchParams.get("q"))}
          </CardDescription>
        )}
        <div className="text-xs text-gray-500">
          {createdAt}{" "}
          {
            <>
              | <span className="font-semibold">Author:</span> {author}{" "}
            </>
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchResultItem;
