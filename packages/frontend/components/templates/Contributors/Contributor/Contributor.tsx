import capitalize from "lodash/capitalize";
import { NamedLink } from "components/atomic";
import ContributorName from "@/components/composed/contributor/ContributorName";
import ContributorAvatar from "@/components/composed/contributor/ContributorAvatar";
import * as Styled from "./Contributor.styles";
import type { Contribution } from "../Contributors";

const ContributionBlockItem = ({ contribution, showAvatar }: Props) => {
  if (!contribution) return null;

  const params = new URLSearchParams({
    ...(contribution?.entity.slug && {
      [contribution.entity.__typename.toLowerCase()]: contribution.entity.slug,
    }),
  });

  const href = contribution.contributor.slug
    ? `/contributors/${contribution.contributor.slug}?${params.toString()}`
    : "#";

  return (
    <Styled.ListItem>
      <Styled.ItemContent>
        {showAvatar && (
          <NamedLink href={href}>
            <Styled.ItemAvatar>
              <ContributorAvatar data={contribution.contributor.image} />
            </Styled.ItemAvatar>
          </NamedLink>
        )}
        <div>
          <NamedLink href={href} className="default-link-styles">
            <strong>
              <ContributorName data={contribution.contributor} />
            </strong>
          </NamedLink>
          <Styled.ItemMetadata className="t-copy-lighter t-copy-sm">
            {contribution.role && <p>{capitalize(contribution.role)}</p>}
            {(contribution.affiliation ||
              contribution.contributor.affiliation) && (
              <p>
                {contribution.affiliation ||
                  contribution.contributor.affiliation}
              </p>
            )}
            {contribution.contributor.orcid && (
              <Styled.ORCIDLink href={contribution.contributor.orcid}>
                {contribution.contributor.orcid}
              </Styled.ORCIDLink>
            )}
          </Styled.ItemMetadata>
        </div>
      </Styled.ItemContent>
    </Styled.ListItem>
  );
};

interface Props {
  contribution?: Contribution | null;
  showAvatar?: boolean;
}

export default ContributionBlockItem;
