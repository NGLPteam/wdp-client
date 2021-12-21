import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import * as Styled from "./JournalInfo.styles";
import { JournalInfoFragment$key } from "@/relay/JournalInfoFragment.graphql";
import { ArrowLink } from "components/atomic";

export default function JournalInfo({ data }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const journal = useMaybeFragment(fragment, data);
  const announcements = [1, 2];
  const { t } = useTranslation();

  return (
    <section className="a-bg-custom10">
      <Styled.SectionInner className="l-container-wide">
        <Styled.InfoBlock className="t-rte">
          <h3>About Section</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            dapibus metus ut nibh semper, eget semper sem dictum. Sed metus
            ipsum, facilisis vitae malesuada quis, iaculis in sem. Aenean eros
            metus, euismod sed risus sit amet, ultrices consequat augue. Nam
            ornare dolor accumsan, volutpat dui et, euismod nunc. Aliquam
            blandit porta hendrerit.
          </p>
          <p>
            Nunc rutrum erat nec dolor pretium egestas. Nunc tempor, mi posuere
            elementum malesuada, lectus diam tincidunt turpis, vitae dictum
            justo magna eu neque. Aenean ultricies nibh eget purus viverra, at
            egestas risus pellentesque. Curabitur sagittis dolor dignissim orci
            sagittis gravida. Nulla consequat dui odio, et dapibus elit porta
            non. Morbi semper nunc non pellentesque eleifend. Phasellus et
            efficitur arcu. Vivamus eu elit ultricies, auctor quam et, volutpat
            eros. Aliquam ut elit sed sem pellentesque suscipit in eget sem.
            Vivamus tortor mauris, placerat interdum tincidunt at, euismod ut
            nisi.
          </p>
          <p>
            Suspendisse dapibus velit vulputate tellus volutpat imperdiet.
            Maecenas commodo egestas metus sodales volutpat. In hac habitasse
            platea dictumst. Sed in condimentum ante, ac elementum erat. Nunc
            ullamcorper malesuada turpis eget feugiat. Suspendisse purus nisi,
            scelerisque at nisl ornare, iaculis eleifend arcu. Ut nec laoreet
            tellus, ut tempor ante. Vivamus hendrerit id augue quis rhoncus.
            Nulla condimentum est ut lacus fermentum, at sodales est malesuada.
          </p>
        </Styled.InfoBlock>
        <Styled.AnnouncementsBlock as="aside" className="a-bg-neutral00">
          <Styled.AnnouncementsHeader>Announcements</Styled.AnnouncementsHeader>
          <ul className="t-unstyled-list">
            {announcements.map((i) => (
              <Styled.AnnouncementItem key={i}>
                <h5 className="t-copy-medium">Title of this Announcement</h5>
                <Styled.AnnouncementBody className="t-rte">
                  <p>
                    Massa convallis diam ac facilisis quisque sit enim et.
                    Viverra est ornare porta justo sapien. Neque, tempor
                    rhoncus, maecenas urna suspendisse. Feugiat id massa nulla
                    vulputate at egestas libero, donec. Dictum porttitor
                    vestibulum cras odio in.
                  </p>
                </Styled.AnnouncementBody>
                <ArrowLink className="t-label-mix">
                  {t("common.read_more")}
                </ArrowLink>
              </Styled.AnnouncementItem>
            ))}
          </ul>
        </Styled.AnnouncementsBlock>
      </Styled.SectionInner>
    </section>
  );
}

interface Props {
  data?: JournalInfoFragment$key | null;
}

const fragment = graphql`
  fragment JournalInfoFragment on Collection {
    title
  }
`;
