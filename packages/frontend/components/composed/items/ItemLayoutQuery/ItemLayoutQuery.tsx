import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import AppLayout from "components/global/AppLayout";
import { ItemLayoutQueryFragment$key } from "@/relay/ItemLayoutQueryFragment.graphql";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";

export default function ItemLayoutQuery({ data, children }: Props) {
  const queryData = useMaybeFragment(fragment, data);

  return (
    <AppLayout
      communityData={queryData?.item?.community}
      entityData={queryData?.item}
    >
      <EntityHTMLHead data={queryData?.item} appData={queryData} />
      {children}
    </AppLayout>
  );
}

interface Props {
  data?: ItemLayoutQueryFragment$key | null;
  children: React.ReactNode;
}

const fragment = graphql`
  fragment ItemLayoutQueryFragment on Query
  @argumentDefinitions(slug: { type: "Slug!" }) {
    item(slug: $slug) {
      ...AppLayoutEntityFragment
      ...EntityHTMLHeadFragment
      community {
        ...AppLayoutCommunityFragment
      }
    }
    ...EntityHTMLHeadAppFragment
  }
`;
