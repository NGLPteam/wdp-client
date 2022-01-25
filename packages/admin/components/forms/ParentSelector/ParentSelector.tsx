import React from "react";
import { graphql } from "react-relay";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import * as Styled from "./ParentSelector.styles";
import ParentSelectorModal from "./ParentSelectorModal";
import { useMaybeFragment } from "hooks";
import BaseInputLabel from "components/forms/BaseInputLabel";
import { ButtonControl } from "components/atomic";

import { ParentSelectorFragment$key } from "@/relay/ParentSelectorFragment.graphql";

const ParentSelector = ({ data }: Props) => {
  const entity = useMaybeFragment(fragment, data);
  const dialog = useDialogState({ visible: false, animated: true });
  const { t } = useTranslation();

  return entity?.parent?.id && entity?.entityId ? (
    <>
      <Styled.FieldWrapper>
        <BaseInputLabel as="span">{t("forms.parent.label")}</BaseInputLabel>
        <Styled.Field>
          {entity?.parent?.title && (
            <Styled.ParentText>{entity.parent.title}</Styled.ParentText>
          )}
          <DialogDisclosure as={ButtonControl} {...dialog}>
            {t("forms.parent.change_button")}
          </DialogDisclosure>
        </Styled.Field>
      </Styled.FieldWrapper>
      <ParentSelectorModal
        dialog={dialog}
        entityId={entity?.entityId}
        parentId={entity?.parent?.id}
      />
    </>
  ) : null;
};

export default ParentSelector;

type Props = {
  data?: ParentSelectorFragment$key;
};

const fragment = graphql`
  fragment ParentSelectorFragment on AnyEntity {
    ... on Collection {
      entityId: id
      parent {
        ... on Community {
          id
          title
        }
        ... on Collection {
          id
          title
        }
      }
    }
    ... on Item {
      entityId: id
      parent {
        ... on Item {
          id
          title
        }
        ... on Collection {
          id
          title
        }
      }
    }
  }
`;
