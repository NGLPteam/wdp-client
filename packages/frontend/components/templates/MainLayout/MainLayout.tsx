"use client";

import { graphql, useFragment } from "react-relay";
import NoContent from "@/components/layout/messages/NoContent";
import Container from "@/components/layout/Container";
import TemplateFactory from "@/components/templates/Factory";
import {
  MainLayoutFragment$key,
  MainLayoutFragment$data,
} from "@/relay/MainLayoutFragment.graphql";
import type { HeroBackground } from "@/types/graphql-schema";
import styles from "./MainLayout.module.css";

export default function MainLayout({
  data,
  computedBgStart,
}: {
  data?: MainLayoutFragment$key | null;
  computedBgStart?: HeroBackground;
}) {
  const { allHidden, templates } = useFragment(fragment, data) ?? {};

  const bgMap =
    computedBgStart && templates?.length
      ? generateBgMap(computedBgStart, templates[0])
      : null;

  return allHidden || !templates ? (
    <Container className="my-5">
      <NoContent />
    </Container>
  ) : (
    <div className={styles.grid}>
      {!!templates?.length &&
        templates.map((t, i) => (
          <TemplateFactory key={i} data={t} bgOverride={bgMap?.[i]} />
        ))}
    </div>
  );
}

type FirstTemplate = MainLayoutFragment$data["templates"][number];
type SiblingTemplate = NonNullable<FirstTemplate["nextSiblings"]>[number];

const fragment = graphql`
  fragment MainLayoutFragment on MainLayoutInstance {
    allHidden
    templates {
      ... on TemplateInstance {
        hidden
        nextSiblings {
          dark
          hidden
          position
          templateKind
        }
      }
      ...FactoryTemplatesFragment
    }
  }
`;

const generateBgMap = (
  startColor: HeroBackground,
  firstTemplate: FirstTemplate,
) => {
  const { nextSiblings } = firstTemplate ?? {};

  const initMap = determineFirstBg(startColor, firstTemplate);

  return nextSiblings?.reduce((map, sib) => mapSiblingBgs(map, sib), initMap);
};

const determineFirstBg = (
  startColor: HeroBackground,
  template: FirstTemplate,
): (HeroBackground | null)[] => {
  if (template.hidden) return [null];
  return [startColor];
};

const mapSiblingBgs = (
  bgMap: (HeroBackground | null)[],
  template: SiblingTemplate,
) => {
  if (template.hidden) return [...bgMap, null];
  if (template.dark) {
    if (bgMap[bgMap.length - 1] !== "DARK") return [...bgMap, "DARK" as const];
  }

  return [...bgMap, getNextColor(bgMap)];
};

const getNextColor = (
  bgMap: (HeroBackground | null)[],
): HeroBackground | null => {
  const prevColor = bgMap.pop();

  if (!prevColor) return getNextColor(bgMap);
  if (prevColor === "LIGHT") return "NONE";
  if (prevColor === "NONE") return "LIGHT";
  if (prevColor === "DARK")
    return bgMap.findLast(
      (c) => c === "LIGHT" || c === "NONE",
    ) as HeroBackground;

  return null;
};
