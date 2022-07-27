import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { EntityAnnouncementDrawerActionsFragment$key } from "@/relay/EntityAnnouncementDrawerActionsFragment.graphql";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import { useDestroyer, useMaybeFragment } from "hooks";

interface Props {
  data?: EntityAnnouncementDrawerActionsFragment$key | null;
  onDelete: () => void;
}

export default function EntityAnnouncementDrawerActions({
  data,
  onDelete,
}: Props) {
  const entity = useMaybeFragment(fragment, data);

  const destroy = useDestroyer();

  const { t } = useTranslation();

  /* Delete button */
  const handleDelete = () => {
    if (!entity?.announcement?.id) return;

    destroy.announcement(
      { announcementId: entity.announcement.id },
      t("glossary.announcement")
    );
    if (onDelete) onDelete();
  };

  return <DrawerActions handleDelete={handleDelete} />;
}

const fragment = graphql`
  fragment EntityAnnouncementDrawerActionsFragment on Entity {
    announcement(slug: $announcementSlug) {
      id
    }
  }
`;
