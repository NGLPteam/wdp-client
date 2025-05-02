import { useMemo } from "react";
import { Link, NamedLink } from "components/atomic";
import { CommunityNameFragment$data } from "@/relay/CommunityNameFragment.graphql";
import CommunityLogo from "./CommunityLogo";

export default function CommunityName({ community }: Props) {
  const hideName = useMemo(
    () =>
      community &&
      community.logo &&
      community.logo.original.width &&
      community.logo.original.height &&
      Math.floor(
        community.logo.original.width / community.logo.original.height,
      ) > 1,
    [community],
  );

  return community ? (
    <>
      <CommunityLogo data={community?.logo} slug={community?.slug} />
      <h4 className={hideName ? "sr-only" : undefined}>
        <NamedLink
          href={
            community?.slug ? `/communities/${community.slug}` : "/communities"
          }
        >
          <Link as="span">{community?.title}</Link>
        </NamedLink>
      </h4>
    </>
  ) : null;
}

interface Props {
  community?: CommunityNameFragment$data | null;
}
