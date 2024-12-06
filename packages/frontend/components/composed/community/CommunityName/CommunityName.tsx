import { useContext } from "react";
import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import { CommunityNameFragment$key } from "@/relay/CommunityNameFragment.graphql";
import { CommunityContext } from "@/contexts/CommunityContext";
import styles from "./CommunityName.module.css";
import CommunityNameContent from "./CommunityNameContent";

export default function CommunityName() {
  const communityData = useContext(CommunityContext);
  const community = useFragment<CommunityNameFragment$key>(
    fragment,
    communityData,
  );

  return (
    <div
      className={classNames("l-flex l-flex--align-center", styles.wrapper)}
      data-active={!!community}
    >
      {community && <CommunityNameContent community={community} />}
    </div>
  );
}

const fragment = graphql`
  fragment CommunityNameFragment on Community {
    title
    slug
    logo {
      storage
      original {
        width
        height
      }
      ...CommunityLogoFragment
    }
  }
`;
