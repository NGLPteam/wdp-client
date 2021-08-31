import ContributorCreatePersonDrawer from "components/composed/contributor/ContributorCreatePersonDrawer";
import ContributorCreateOrganizationDrawer from "components/composed/contributor/ContributorCreateOrganizationDrawer";
import ItemContributionEditDrawer from "components/composed/contribution/ItemContributionEditDrawer";
import CollectionContributionEditDrawer from "components/composed/contribution/CollectionContributionEditDrawer";

const drawers = {
  addPerson: ContributorCreatePersonDrawer,
  addOrganization: ContributorCreateOrganizationDrawer,
  editItemContribution: ItemContributionEditDrawer,
  editCollectionContribution: CollectionContributionEditDrawer,
};

export default drawers;
