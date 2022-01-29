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
  const parentFragment =
    entity?.__typename === "Collection"
      ? collectionParentFragment
      : itemParentFragment;
  const parent = useMaybeFragment(parentFragment, entity?.parent);
  const dialog = useDialogState({ visible: false, animated: true });
  const { t } = useTranslation();

  return parent?.id && entity?.entityId ? (
    <>
      <Styled.FieldWrapper>
        <BaseInputLabel as="span">{t("forms.parent.label")}</BaseInputLabel>
        <Styled.Field>
          {parent?.title && (
            <Styled.ParentText>{parent.title}</Styled.ParentText>
          )}
          <DialogDisclosure as={ButtonControl} {...dialog}>
            {t("forms.parent.change_button")}
          </DialogDisclosure>
        </Styled.Field>
      </Styled.FieldWrapper>
      <ParentSelectorModal
        dialog={dialog}
        entityId={entity?.entityId}
        entityKind={entity?.__typename}
        parentId={parent?.id}
      />
    </>
  ) : null;
};

export default ParentSelector;

type Props = {
  data?: ParentSelectorFragment$key;
};

const collectionParentFragment = graphql`
  fragment ParentSelectorCollectionFragment on CollectionParent {
    ... on Collection {
      id
      title
    }
    ... on Community {
      id
      title
    }
  }
`;

const itemParentFragment = graphql`
  fragment ParentSelectorItemFragment on ItemParent {
    ... on Collection {
      id
      title
    }
    ... on Item {
      id
      title
    }
  }
`;

const fragment = graphql`
  fragment ParentSelectorFragment on AnyEntity {
    ... on Collection {
      __typename
      entityId: id
      parent {
        ...ParentSelectorCollectionFragment
      }
    }
    ... on Item {
      __typename
      entityId: id
      parent {
        ...ParentSelectorItemFragment
      }
    }
  }
`;
