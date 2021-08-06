import React from "react";
import { Search } from "components/atomic/forms";
import { useRouter } from "next/router";

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
