import React from "react";
import { graphql } from "react-relay";
import Image from "next/image";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./JournalHero.styles";
import { JournalHeroFragment$key } from "@/relay/JournalHeroFragment.graphql";
import { baseColors } from "theme/base/variables";

export default function JournalHero({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return journal ? (
    <>
      <section className="a-bg-custom10">
        <Styled.HeroInner className="l-container-wide">
          <h2>{journal.title}</h2>
          <div className="t-label-sm">ISSN</div>
        </Styled.HeroInner>
      </section>
      <div
        className="a-bg-custom20"
        style={{ position: "relative", height: "300px" }}
      >
        <Image
          src={`https://via.placeholder.com/2880x600/${baseColors.neutral20}`}
          layout="fill"
          objectFit="cover"
          width={1440}
          height={300}
        />
      </div>
    </>
  ) : null;
}

interface Props {
  data?: JournalHeroFragment$key | null;
}

const fragment = graphql`
  fragment JournalHeroFragment on Collection {
    title
  }
`;
