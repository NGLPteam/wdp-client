import { graphql, useFragment } from "react-relay";
import SummaryListItem from "@/components/templates/lists/items/Summary";
import { EntitySummaryFragment$key } from "@/relay/EntitySummaryFragment.graphql";

export default function EntitySummary({ data, className }: Props) {
  const entity = useFragment(fragment, data);

  return entity ? (
    <SummaryListItem
      data={entity.layouts.listItem?.template}
      showContext
      className={className}
    />
  ) : null;
}

interface Props {
  data: EntitySummaryFragment$key | null;
  className?: string;
}

const fragment = graphql`
  fragment EntitySummaryFragment on Entity {
    __typename
    layouts {
      listItem {
        template {
          ...sharedListItemTemplateFragment
        }
      }
    }
  }
`;
