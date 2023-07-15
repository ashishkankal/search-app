import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export interface SearchResultItemProps {
  title: string;
  description: string;
}
const SearchResultItem = ({ title, description }: SearchResultItemProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);

export default SearchResultItem;
