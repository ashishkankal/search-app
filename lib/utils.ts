import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mapPosts = (p: { [key: string]: any }) => ({
  title: p?.title,
  content: p?.content,
  createdAt: p?.createdAt,
  author: p?.authorName,
});
