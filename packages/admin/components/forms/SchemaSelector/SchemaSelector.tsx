import { graphql, readInlineData } from "react-relay";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import * as Styled from "./SchemaSelector.styles";
import SchemaSelectorModal from "./SchemaSelectorModal";
import { useGlobalContext } from "contexts";
import { useMaybeFragment } from "hooks";
import Select from "components/forms/Select";
import BaseInputLabel from "components/forms/BaseInputLabel";
import { ButtonControl } from "components/atomic";
import { SchemaSelectorDataFragment$key } from "@/relay/SchemaSelectorDataFragment.graphql";
import {
  SchemaSelectorSchemasFragment$key,
  SchemaSelectorSchemasFragment$data,
} from "@/relay/SchemaSelectorSchemasFragment.graphql";

type SelectProps = React.ComponentProps<typeof Select>;

const SchemaSelector = ({ schemaData, schemaKind }: Props) => {
  const data = useMaybeFragment(fragment, schemaData);

  const dialog = useDialogState({ visible: false, animated: true });

  const { t } = useTranslation();

  const globalData = useGlobalContext();

  const schemas = readInlineData<SchemaSelectorSchemasFragment$key>(
    schemasFragment,
    globalData
  );

  const optionCount =
    schemas?.schemaVersions?.nodes?.filter(
      (schema: SchemaNode) => schema.kind === schemaKind
    ).length || 0;

  return schemas &&
    schemaKind &&
    data?.schemaVersion &&
    data?.entityId &&
    optionCount > 1 ? (
    <>
      <Styled.FieldWrapper>
        <BaseInputLabel as="span">
          {t("forms.schema.current_label")}
        </BaseInputLabel>
        <Styled.Field>
          {data?.schemaVersion && (
            <Styled.VersionText>{`${data.schemaVersion.name} ${data.schemaVersion.number}`}</Styled.VersionText>
          )}
          <DialogDisclosure as={ButtonControl} {...dialog}>
            {t("forms.schema.change_button")}
          </DialogDisclosure>
        </Styled.Field>
      </Styled.FieldWrapper>
      <SchemaSelectorModal
        data={schemas.schemaVersions}
        dialog={dialog}
        entityId={data?.entityId}
        schemaVersionSlug={data?.schemaVersion?.slug}
        schemaKind={schemaKind}
      />
    </>
  ) : null;
};

interface Props extends Pick<SelectProps, "defaultValue"> {
  schemaData?: SchemaSelectorDataFragment$key;
  schemaKind: "COLLECTION" | "ITEM" | "COMMUNITY";
}

export default SchemaSelector;

type SchemaNode =
  SchemaSelectorSchemasFragment$data["schemaVersions"]["nodes"][number];

const fragment = graphql`
  fragment SchemaSelectorDataFragment on AnyEntity {
    ... on Collection {
      entityId: id
      schemaVersion {
        name
        number
        slug
      }
    }

    ... on Item {
      entityId: id
      schemaVersion {
        name
        number
        slug
      }
    }

    ... on Community {
      entityId: id
      schemaVersion {
        name
        number
        slug
      }
    }
  }
`;

const schemasFragment = graphql`
  fragment SchemaSelectorSchemasFragment on Query @inline {
    schemaVersions {
      nodes {
        name
        kind
      }
      ...SchemaSelectorModalOptionsFragment
    }
  }
`;
