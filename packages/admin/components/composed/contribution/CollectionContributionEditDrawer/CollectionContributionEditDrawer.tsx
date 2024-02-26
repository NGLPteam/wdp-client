import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";
import { graphql } from "relay-runtime";
import { useDestroyer, useDrawerHelper } from "hooks";
import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import type {
  CollectionContributionEditDrawerQuery as Query,
  CollectionContributionEditDrawerQuery$data as Response,
} from "__generated__/CollectionContributionEditDrawerQuery.graphql";
import ContributionUpdateForm from "components/composed/contribution/ContributionUpdateForm";

export default function CollectionContributionEditDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  /* Render delete button */
  function renderButtons(data?: Response | null) {
    if (!data) return;

    /* Delete button */
    const handleDelete = () => {
      if (data.collectionContribution?.id) {
        destroy.contribution(
          { contributionId: data.collectionContribution.id },
          t("glossary.contribution")
        );
      }
      if (dialog?.hide) dialog.hide();
    };

    return <DrawerActions handleDelete={handleDelete} />;
  }

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ collectionContributionSlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          header={t("actions.edit.collection_contribution")}
          dialog={dialog}
          hideOnClickOutside={false}
          buttons={renderButtons(data)}
        >
          {data && data.collectionContribution && (
            <ContributionUpdateForm
              data={data.collectionContribution}
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
            />
          )}
        </Drawer>
      )}
    </QueryWrapper>
  );
}
const query = graphql`
  query CollectionContributionEditDrawerQuery(
    $collectionContributionSlug: Slug!
  ) {
    collectionContribution(slug: $collectionContributionSlug) {
      ...ContributionUpdateFormFragment
      id
      role
      collection {
        title
      }
    }
  }
`;
