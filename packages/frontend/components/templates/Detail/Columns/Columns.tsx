import { PropsWithChildren } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import {
  useSharedInlineFragment,
  useSharedBlockFragment,
} from "@/components/templates/shared/shared.slots.graphql";
import Container from "@/components/layout/Container";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import { ColumnsDetailFragment$key } from "@/relay/ColumnsDetailFragment.graphql";
import type { HeroBackground } from "@/types/graphql-schema";
import styles from "./Columns.module.css";

export default function Columns({
  data,
  bgColor,
}: PropsWithChildren & {
  data?: ColumnsDetailFragment$key | null;
  bgColor?: HeroBackground | null;
}) {
  const { t } = useTranslation();

  const template = useFragment(fragment, data);

  const { slots } = template ?? {};

  const header = useSharedInlineFragment(slots?.header);
  const itemsA = useSharedBlockFragment(slots?.itemsA);
  const itemsB = useSharedBlockFragment(slots?.itemsB);
  const itemsC = useSharedBlockFragment(slots?.itemsC);
  const itemsD = useSharedBlockFragment(slots?.itemsD);

  const canRender =
    !!itemsA?.content ||
    !!itemsB?.content ||
    !!itemsC?.content ||
    !!itemsD?.content;

  return canRender ? (
    <Container width="wide" bgColor={bgColor} className={styles.container}>
      <h3>
        {header?.valid ? (
          <InlineSlotWrapper content={header.content} />
        ) : (
          t("metadata.header")
        )}
      </h3>
      <dl className={styles.list}>
        {itemsA?.valid && <BlockSlotWrapper content={itemsA.content} />}
        {itemsB?.valid && <BlockSlotWrapper content={itemsB.content} />}
        {itemsC?.valid && <BlockSlotWrapper content={itemsC.content} />}
        {itemsD?.valid && <BlockSlotWrapper content={itemsD.content} />}
      </dl>
    </Container>
  ) : null;
}

const fragment = graphql`
  fragment ColumnsDetailFragment on DetailTemplateInstance {
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
