import React from "react";
import { Search } from "components/atomic/forms";
import { useRouter } from "next/router";
import * as Styled from "./Header.styles";

const HeaderSearch = () => {
  const router = useRouter();

  const handleSubmit = (value) => {
    router.push({
      pathname: "/search",
      query: { q: value },
    });
  };

  return (
    <Styled.Item>
      <Search onSubmit={handleSubmit} />
    </Styled.Item>
  );
};

export default HeaderSearch;
