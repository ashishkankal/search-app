import { NextResponse } from "next/server";

const data = [
  {
    title: "Product 1",
    description: "This is the first product description.",
  },
  {
    title: "Product 2",
    description: "This is the second product description.",
  },
  {
    title: "Product 3",
    description: "This is the third product description.",
  },
  {
    title: "Product 4",
    description: "This is the fourth product description.",
  },
  {
    title: "Product 5",
    description: "This is the fifth product description.",
  },
  {
    title: "Product 6",
    description: "This is the sixth product description.",
  },
  {
    title: "Product 7",
    description: "This is the seventh product description.",
  },
  {
    title: "Product 8",
    description: "This is the eighth product description.",
  },
  {
    title: "Product 9",
    description: "This is the ninth product description.",
  },
  {
    title: "Product 10",
    description: "This is the tenth product description.",
  },
  {
    title: "Product 11",
    description: "This is the eleventh product description.",
  },
  {
    title: "Product 12",
    description: "This is the twelfth product description.",
  },
  {
    title: "Product 13",
    description: "This is the thirteenth product description.",
  },
  {
    title: "Product 14",
    description: "This is the fourteenth product description.",
  },
  {
    title: "Product 15",
    description: "This is the fifteenth product description.",
  },
  {
    title: "Product 16",
    description: "This is the sixteenth product description.",
  },
  {
    title: "Product 17",
    description: "This is the seventeenth product description.",
  },
  {
    title: "Product 18",
    description: "This is the eighteenth product description.",
  },
  {
    title: "Product 19",
    description: "This is the nineteenth product description.",
  },
  {
    title: "Product 20",
    description: "This is the twentieth product description.",
  },
];

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  return NextResponse.json(data);
}
