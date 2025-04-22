import { Trans } from "react-i18next";

export const communityHeroFieldDescription = (
  <Trans i18nKey={"forms.fields.community_hero_description"}>
    <span>Recommended sizes:</span>
    <ul style={{ marginInlineStart: "1.5rem", listStylePosition: "outside" }}>
      <li>One Column Layout: 2880px wide by 980px tall (72ppi)</li>
      <li>Two Column Layout: 1440px wide by 980px tall (72ppi)</li>
    </ul>
    <span style={{ display: "block", marginBlockStart: ".5rem" }}>
      For flexibility, all images can be uploaded at single column size.
    </span>
  </Trans>
);

export const logoFieldDescription = (
  <Trans i18nKey={"forms.fields.logo_description"}>
    <span>Recommended sizes:</span>
    <ul style={{ marginInlineStart: "1.5rem", listStylePosition: "outside" }}>
      <li>
        Raster Logos: 566px by 566px. This size ensures it looks crisp,
        especially on list pages.
      </li>
      <li>
        Vector Logos: These are scalable so there are no minimum pixel
        dimensions, but if there’s too much white space around the logo, it may
        appear smaller than expected.
      </li>
    </ul>
  </Trans>
);
