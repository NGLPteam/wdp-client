"use client";

import { graphql, useFragment } from "react-relay";
import { ContributionsBlockFragment$key } from "@/relay/ContributionsBlockFragment.graphql";
import Contributor from "@/components/templates/Contributors/Contributor";
import BaseContributionsBlock from "./BaseContributionsBlock";

type BaseProps = Omit<
  React.ComponentProps<typeof BaseContributionsBlock>,
  "children"
> & { slug: string };

const ContributionsBlock = ({
  data,
  filterRole,
  slug,
  ...baseProps
}: Props) => {
  const { attributions } = useFragment(fragment, data) ?? {};

  const filtered = attributions?.filter(
    (node) =>
      !filterRole ||
      (!!node.roles.length &&
        node.roles.find(
          (r) => r.label.toLowerCase() === filterRole.toLowerCase(),
        )),
  );

  const backParams = new URLSearchParams({ item: slug });

  return (
    <BaseContributionsBlock {...baseProps}>
      {filtered?.length
        ? filtered.map((node) => (
            <Contributor data={node} key={node.slug} backParams={backParams} />
          ))
        : null}
    </BaseContributionsBlock>
  );
};

interface Props extends BaseProps {
  data?: ContributionsBlockFragment$key | null;
  /** Filter by a role, example: author */
  filterRole?: string;
}

export default ContributionsBlock;

const fragment = graphql`
  fragment ContributionsBlockFragment on Item {
    attributions {
      slug
      roles {
        label
      }
      contributor {
        image {
          storage
        }
      }
      ...ContributorFragment
    }
  }
`;
