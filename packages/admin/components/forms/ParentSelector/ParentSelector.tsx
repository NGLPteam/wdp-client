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

  if (entity?.__typename === "%other") return null;
  const parent = entity?.parent;

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
        parentSlug={parent?.slug}
        entitySchemaVersion={entity?.schemaVersion}
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
      __typename
      entityId: id
      schemaVersion {
        enforcesParent
        enforcedParentVersions {
          identifier
          namespace
        }
      }
      parent {
        ... on Collection {
          id
          slug
          title
        }
        ... on Community {
          id
          slug
          title
        }
      }
    }
    ... on Item {
      __typename
      entityId: id
      schemaVersion {
        enforcesParent
        enforcedParentVersions {
          identifier
          namespace
        }
      }
      parent {
        ... on Collection {
          id
          slug
          title
        }
        ... on Item {
          id
          slug
          title
        }
      }
    }
  }
`;
