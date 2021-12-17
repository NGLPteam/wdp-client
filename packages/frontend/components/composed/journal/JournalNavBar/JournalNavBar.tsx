import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import JournalNavList from "../JournalNavList";
import * as Styled from "./JournalNavBar.styles";
import { Search } from "components/forms";
import { JournalNavBarFragment$key } from "@/relay/JournalNavBarFragment.graphql";

export default function JournalNavBar({ data }: Props) {
  const { t } = useTranslation();
  const journal = useMaybeFragment(fragment, data);

  return journal ? (
    <Styled.Nav className="a-bg-custom20" as="nav">
      <Styled.NavInner className="l-container-wide">
        <Styled.LeftSide>
          <JournalNavList data={journal} />
        </Styled.LeftSide>
        <Styled.RightSide>
          <Search
            placeholder={t("search.journal_placeholder", {
              name: journal.title,
            })}
            queryParams={{ collectionID: journal.id }}
          />
        </Styled.RightSide>
      </Styled.NavInner>
    </Styled.Nav>
  ) : null;
}

type Props = {
  data?: JournalNavBarFragment$key | null;
};

const fragment = graphql`
  fragment JournalNavBarFragment on Collection {
    title
    id
    ...JournalNavListFragment
  }
`;
