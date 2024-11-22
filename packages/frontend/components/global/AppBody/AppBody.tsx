"use client";

import { graphql } from "react-relay";
import { updateI18n } from "i18n";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBodyFragment$key } from "@/relay/AppBodyFragment.graphql";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import * as Styled from "./AppBody.styles";

interface Props {
  children: React.ReactNode;
  data?: AppBodyFragment$key | null;
}

function AppBody({ children, data }: Props) {
  updateI18n("en");

  const globalData = useMaybeFragment(fragment, data);

  return (
    <Styled.Body className="a-bg-neutral00">
      <AppHeader data={globalData} />
      <Styled.Main id="main" tabIndex={-1}>
        {children}
      </Styled.Main>
      <AppFooter data={globalData} />
    </Styled.Body>
  );
}

export default AppBody;

const fragment = graphql`
  fragment AppBodyFragment on Query {
    ...AppHeaderFragment
    ...AppFooterFragment
  }
`;
