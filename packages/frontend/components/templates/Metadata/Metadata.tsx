"use client";

import { PropsWithChildren } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { MetadataTemplateFragment$key } from "@/relay/MetadataTemplateFragment.graphql";
import {
  useSharedInlineFragment,
  useSharedBlockFragment,
} from "@/components/templates/shared/shared.slots.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import * as Styled from "./Metadata.styles";

export default function MetadataTemplate({
  data,
}: PropsWithChildren & { data?: MetadataTemplateFragment$key | null }) {
  const { t } = useTranslation();

  const template = useFragment(fragment, data);

  const { definition, slots } = template ?? {};

  const header = useSharedInlineFragment(slots?.header);
  const itemsA = useSharedBlockFragment(slots?.itemsA);
  const itemsB = useSharedBlockFragment(slots?.itemsB);
  const itemsC = useSharedBlockFragment(slots?.itemsC);
  const itemsD = useSharedBlockFragment(slots?.itemsD);

  const canRender =
    itemsA?.valid || itemsB?.valid || itemsC?.valid || itemsD?.valid;

  return canRender ? (
    <Styled.Container bgColor={definition?.background}>
      <h3>
        {header?.valid ? (
          <InlineSlotWrapper content={header.content} />
        ) : (
          t("metadata.header")
        )}
      </h3>
      <Styled.List>
        {itemsA?.valid && (
          <Styled.Column>
            <BlockSlotWrapper content={itemsA.content} />
          </Styled.Column>
        )}
        {itemsB?.valid && (
          <Styled.Column>
            <BlockSlotWrapper content={itemsB.content} />
          </Styled.Column>
        )}
        {itemsC?.valid && (
          <Styled.Column>
            <BlockSlotWrapper content={itemsC.content} />
          </Styled.Column>
        )}
        {itemsD?.valid && (
          <Styled.Column>
            <BlockSlotWrapper content={itemsD.content} />
          </Styled.Column>
        )}
      </Styled.List>
    </Styled.Container>
  ) : null;
}

const fragment = graphql`
  fragment MetadataTemplateFragment on MetadataTemplateInstance {
    definition {
      background
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
      itemsA {
        ...sharedBlockSlotFragment
      }
      itemsB {
        ...sharedBlockSlotFragment
      }
      itemsC {
        ...sharedBlockSlotFragment
      }
      itemsD {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
