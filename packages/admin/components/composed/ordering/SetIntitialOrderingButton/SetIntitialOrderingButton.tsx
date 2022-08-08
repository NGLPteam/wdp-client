import { useTranslation } from "react-i18next";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import { graphql } from "relay-runtime";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import SetIntitialOrderingModal from "../SetIntitialOrderingModal/SetIntitialOrderingModal";
import { SetIntitialOrderingButtonFragment$key } from "@/relay/SetIntitialOrderingButtonFragment.graphql";
import { ButtonControl } from "components/atomic";

interface Props {
  data?: SetIntitialOrderingButtonFragment$key | null;
}

export default function SetIntitialOrderingButton({ data }: Props) {
  const { t } = useTranslation();

  const entityData = useMaybeFragment<SetIntitialOrderingButtonFragment$key>(
    fragment,
    data
  );

  const dialog = useDialogState({ visible: false, animated: true });

  return entityData && entityData.orderings?.pageInfo?.totalCount > 0 ? (
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
      orderings {
        pageInfo {
          totalCount
        }
      }
    }
    ... on Collection {
      ...SetIntitialOrderingModalFragment
      orderings {
        pageInfo {
          totalCount
        }
      }
    }
  }
`;
