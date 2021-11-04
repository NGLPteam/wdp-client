import React from "react";
import { useRouter } from "next/router";
import { Search } from "components/forms";

const GlobalSearch = () => {
  const router = useRouter();

  const handleSubmit = (value: string) => {
    router.push({
      pathname: "/search",
      query: { q: value },
    });
  };

  return <Search onSubmit={handleSubmit} />;
};

export default GlobalSearch;
