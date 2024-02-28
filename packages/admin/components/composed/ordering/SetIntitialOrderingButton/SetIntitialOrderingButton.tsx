import { useTranslation } from "react-i18next";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ButtonControl } from "components/atomic";
import { SetIntitialOrderingButtonFragment$key } from "@/relay/SetIntitialOrderingButtonFragment.graphql";
import SetIntitialOrderingModal from "../SetIntitialOrderingModal/SetIntitialOrderingModal";

interface Props {
  data?: SetIntitialOrderingButtonFragment$key | null;
}

export default function SetIntitialOrderingButton({ data }: Props) {
  const { t } = useTranslation();

  const entityData = useMaybeFragment<SetIntitialOrderingButtonFragment$key>(
    fragment,
    data,
  );

  const dialog = useDialogState({ visible: false, animated: true });

  return entityData?.orderings?.pageInfo &&
    entityData.orderings.pageInfo?.totalCount > 0 ? (
    <>
      <DialogDisclosure as={ButtonControl} {...dialog} actions="self.update">
        {t("actions.set.initial_ordering")}
      </DialogDisclosure>
      <SetIntitialOrderingModal dialog={dialog} data={entityData} />
    </>
  ) : (
    <></>
  );
}

const fragment = graphql`
  fragment SetIntitialOrderingButtonFragment on Entity {
    ... on Item {
      ...SetIntitialOrderingModalFragment
      orderings(page: $page) {
        pageInfo {
          totalCount
        }
      }
    }
    ... on Collection {
      ...SetIntitialOrderingModalFragment
      orderings(page: $page) {
        pageInfo {
          totalCount
        }
      }
    }
  }
`;
