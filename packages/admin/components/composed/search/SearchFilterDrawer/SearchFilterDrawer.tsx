import { QueryWrapper } from "@wdp/lib/api/components";
import { graphql } from "react-relay";
import type { DialogProps } from "reakit/Dialog";
import SearchFilterForm from "../SearchFilterForm";
import { Drawer } from "components/layout";
import { SearchFilterDrawerQuery as Query } from "@/relay/SearchFilterDrawerQuery.graphql";

export default function SearchFilterDrawer({
  dialog,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  return (
    <QueryWrapper<Query> query={query}>
      {({ data }) => (
        <Drawer
          label={"Filtering"}
          header={"Search Options"}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          <SearchFilterForm
            data={data?.search}
            onSuccess={dialog.hide}
            onCancel={dialog.hide}
          />
        </Drawer>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query SearchFilterDrawerQuery {
    search {
      ...SearchFilterFormFragment
    }
  }
`;
