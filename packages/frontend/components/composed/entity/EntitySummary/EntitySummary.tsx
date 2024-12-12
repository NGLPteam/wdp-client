import { graphql, useFragment } from "react-relay";
import SummaryListItem from "@/components/templates/lists/items/Summary";
import { EntitySummaryFragment$key } from "@/relay/EntitySummaryFragment.graphql";

export default function EntitySummary({ data }: Props) {
  const entity = useFragment(fragment, data);

  return entity ? (
    <SummaryListItem
      data={entity.layouts.listItem?.template}
      hideCover={entity.__typename === "Item"}
    />
  ) : null;
}

interface Props {
  data: EntitySummaryFragment$key | null;
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
