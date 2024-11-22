import { useMemo } from "react";
import { Link, NamedLink } from "components/atomic";
import { CommunityNameFragment$data } from "@/relay/CommunityNameFragment.graphql";
import CommunityLogo from "./CommunityLogo";

export default function CommunityName({ community }: Props) {
  const hideName = useMemo(
    () =>
      community &&
      community.logo.original.width &&
      community.logo.original.height &&
      Math.floor(
        community.logo.original.width / community.logo.original.height,
      ) > 1,
    [community],
  );

  return (
    <>
      <CommunityLogo data={community?.logo} slug={community?.slug} />
      <h4 className={hideName ? "a-hidden" : undefined}>
        <NamedLink
          href={
            community?.slug ? `/communities/${community.slug}` : "/communities"
          }
        >
          <Link as="span">{community?.title}</Link>
        </NamedLink>
      </h4>
    </>
  );
}

interface Props {
  community?: CommunityNameFragment$data | null;
}
