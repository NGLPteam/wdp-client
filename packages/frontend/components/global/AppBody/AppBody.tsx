import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { AppBodyQuery } from "../../../__generated__/AppBodyQuery.graphql";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import * as Styled from "./AppBody.styles";

function AppBody({ children }: Props) {
  return (
    <Styled.Body className="a-bg-neutral00">
      <QueryWrapper<AppBodyQuery> query={query}>
        {({ data }) => (
          <>
            <AppHeader />
            <Styled.Main id="main">{children}</Styled.Main>
            <AppFooter data={data} />
          </>
        )}
      </QueryWrapper>
    </Styled.Body>
  );
}

interface Props {
  children: React.ReactNode;
}

export default AppBody;

const query = graphql`
  query AppBodyQuery {
    ...AppFooterFragment
  }
`;
