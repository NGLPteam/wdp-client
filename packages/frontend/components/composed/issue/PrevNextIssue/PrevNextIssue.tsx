import { useEffect, useRef } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "@wdp/lib/hooks";
import { PrevNextButton } from "components/atomic/Button/patterns";
import { NamedLink } from "components/atomic";
import { breakpoints } from "theme/base/variables";
import { PrevNextIssueFragment$key } from "@/relay/PrevNextIssueFragment.graphql";
import * as Styled from "./PrevNextIssue.styles";

export default function PrevNextIssue({ data }: Props) {
  const { t } = useTranslation();
  const item = useMaybeFragment(fragment, data);
  const issues = item?.volume?.collections?.edges;

  const { width } = useWindowSize();
  const mobile = useRef(false);

  useEffect(() => {
    if (width && width <= parseInt(breakpoints[70])) {
      mobile.current = true;
      return;
    }
    mobile.current = false;
  }, [width]);

  return issues ? (
    <Styled.Outer className="a-bg-custom10">
      <Styled.Inner className="l-container-wide l-flex l-flex--gap">
        <NamedLink href={`/collections/${item?.slug}`}>
          <PrevNextButton
            as="span"
            iconLeft
            icon="arrowLeft"
            label={mobile.current ? t("nav.previous") : t("nav.previous_issue")}
          />
        </NamedLink>
        <NamedLink href={`/collections/${item?.slug}`}>
          <PrevNextButton
            as="span"
            icon="arrowRight"
            label={mobile.current ? t("nav.next") : t("nav.next_issue")}
          />
        </NamedLink>
      </Styled.Inner>
    </Styled.Outer>
  ) : null;
}

type Props = {
  data?: PrevNextIssueFragment$key | null;
};

/* This query will need udpdating when the api is ready. Passing current items slug for now so the buttons are visible. */
const fragment = graphql`
  fragment PrevNextIssueFragment on Collection {
    slug
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      ... on Collection {
        collections(schema: ["nglp:journal_issue"]) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    }
  }
`;
