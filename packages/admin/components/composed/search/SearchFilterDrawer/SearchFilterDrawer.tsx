import { graphql } from "react-relay";
import type { DialogProps } from "reakit/Dialog";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import SearchFilterForm from "../SearchFilterForm";
import { Drawer } from "components/layout";
import { SearchFilterDrawerFragment$key } from "@/relay/SearchFilterDrawerFragment.graphql";

interface Props {
  dialog: DialogProps;
  data?: SearchFilterDrawerFragment$key | null;
}

export default function SearchFilterDrawer({ dialog, data }: Props) {
  const searchScope = useMaybeFragment(fragment, data);

  return (
    <Drawer
      label={"Filter Options"}
      header={""}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      {searchScope && (
        <SearchFilterForm
          data={searchScope}
          onSuccess={dialog.hide}
          onCancel={dialog.hide}
        />
      )}
    </Drawer>
  );
}

const fragment = graphql`
  fragment SearchFilterDrawerFragment on SearchScope {
    ...SearchFilterFormFragment
  }
`;
