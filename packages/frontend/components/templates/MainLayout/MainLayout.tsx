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
      ? generateBgMap(computedBgStart, templates[0], templates[1])
      : null;

  return allHidden || !templates ? (
    <Container className="my-5">
      <NoContent />
    </Container>
  ) : (
    <div className={styles.grid}>
      {!!templates?.length &&
        templates.map((t, i) => {
          const bgOverride = bgMap?.[i];
          return (
            <TemplateFactory
              key={i}
              data={t}
              bgOverride={bgOverride !== "hidden" ? bgOverride : undefined}
            />
          );
        })}
    </div>
  );
}

type Template = MainLayoutFragment$data["templates"][number];
type SiblingTemplateData = NonNullable<Template["nextSiblings"]>[number];

const fragment = graphql`
  fragment MainLayoutFragment on MainLayoutInstance {
    allHidden
    templates {
      ... on TemplateInstance {
        hidden
        prevSiblings {
          dark
          hidden
          position
          templateKind
        }
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
  firstTemplate: Template,
  secondTemplate: Template,
) => {
  const { nextSiblings } = firstTemplate ?? {};

  const firstSibling = secondTemplate?.prevSiblings?.[0];

  if (!firstSibling) return null;

  const allSiblings = nextSiblings?.length
    ? [firstSibling].concat(nextSiblings)
    : [firstSibling];

  return allSiblings?.reduce(
    (map, sib) => mapSiblingBgs(map, sib, startColor),
    [] as (HeroBackground | "hidden")[],
  );
};

const getFirstBg = (
  startColor: HeroBackground,
  template: SiblingTemplateData,
): (HeroBackground | "hidden")[] => {
  if (template.hidden) return ["hidden" as const];
  if (template.dark) return ["DARK"];
  return [startColor];
};

const mapSiblingBgs = (
  bgMap: (HeroBackground | "hidden")[],
  template: SiblingTemplateData,
  startColor: HeroBackground,
) => {
  if (template.hidden) return [...bgMap, "hidden" as const];
  if (template.dark) {
    if (bgMap[bgMap.length - 1] !== "DARK") return [...bgMap, "DARK" as const];
  }

  if (!bgMap.length) return getFirstBg(startColor, template);

  return [...bgMap, getNextColor(bgMap)];
};

const getNextColor = (
  bgMap: (HeroBackground | "hidden")[],
): HeroBackground | "hidden" => {
  const prevColor = bgMap.pop();

  if (prevColor === "hidden") return getNextColor(bgMap);
  if (prevColor === "LIGHT") return "NONE";
  if (prevColor === "NONE") return "LIGHT";
  if (prevColor === "DARK")
    return bgMap.findLast(
      (c) => c === "LIGHT" || c === "NONE",
    ) as HeroBackground;

  return "hidden";
};
