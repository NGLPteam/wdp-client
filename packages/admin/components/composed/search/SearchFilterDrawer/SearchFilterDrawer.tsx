import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Drawer } from "components/layout";
import { SearchFilterDrawerFragment$key } from "@/relay/SearchFilterDrawerFragment.graphql";
import SearchFilterForm from "../SearchFilterForm";
import type { DialogProps } from "reakit/Dialog";

interface Props {
  dialog: DialogProps;
  data?: SearchFilterDrawerFragment$key | null;
}

export default function SearchFilterDrawer({ dialog, data }: Props) {
  const searchScope = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return (
    <Drawer
      label={t("search.filter_options")}
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
