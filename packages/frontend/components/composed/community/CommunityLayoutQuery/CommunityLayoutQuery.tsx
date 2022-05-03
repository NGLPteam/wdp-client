import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import AppLayout from "components/global/AppLayout";
import { CommunityLayoutQueryFragment$key } from "@/relay/CommunityLayoutQueryFragment.graphql";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";

export default function CommunityLayoutQuery({ data, children }: Props) {
  const queryData = useMaybeFragment(fragment, data);

  return (
    <AppLayout
      communityData={queryData?.community}
      entityData={queryData?.community}
    >
      <EntityHTMLHead data={queryData?.community} appData={queryData} />
      {children}
    </AppLayout>
  );
}

interface Props {
  data?: CommunityLayoutQueryFragment$key | null;
  children: React.ReactNode;
}

const fragment = graphql`
  fragment CommunityLayoutQueryFragment on Query
  @argumentDefinitions(slug: { type: "Slug!" }) {
    community(slug: $slug) {
      ...AppLayoutCommunityFragment
      ...AppLayoutEntityFragment
      ...EntityHTMLHeadFragment
    }
    ...EntityHTMLHeadAppFragment
  }
`;
