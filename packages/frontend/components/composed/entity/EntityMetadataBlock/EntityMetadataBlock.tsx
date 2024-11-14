"use client";

import { PropsWithChildren } from "react";
import classNames from "classnames";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { EntityMetadataBlockFragment$key } from "@/relay/EntityMetadataBlockFragment.graphql";
import { getBgClass } from "@/components/templates/helpers/bgColor";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import * as Styled from "./EntityMetadataBlock.styles";

export default function EntityMetadataBlock({
  children,
  data,
}: PropsWithChildren & { data?: EntityMetadataBlockFragment$key | null }) {
  const { t } = useTranslation();

  const template = useFragment(fragment, data);

  const { definition, slots } = template ?? {};

  const bgClass = getBgClass(definition?.background);

  const header = useSharedInlineFragment(slots?.header);

  return children ? (
    <Styled.Section className={classNames("l-container-wide", bgClass)}>
      <h3>
        {header?.valid ? (
          <InlineSlotWrapper content={header.content} />
        ) : (
          t("metadata.header")
        )}
      </h3>
      <Styled.List>{children}</Styled.List>
    </Styled.Section>
  ) : null;
}

const fragment = graphql`
  fragment EntityMetadataBlockFragment on MetadataTemplateInstance {
    definition {
      background
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
    }
  }
`;
