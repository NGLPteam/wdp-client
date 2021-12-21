import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { encodedIconArrowRight } from "components/svgs/icons/Arrow";
import { baseColors } from "theme/base/variables";

export const List = styled.ul`
  > li {
    display: flex;
    /* Arrow should align at the top of the list item if it wraps */
    align-items: flex-start;
    /* Set line height to make sure arrow is placed correctly with different font sizes */
    line-height: var(--line-height-base);

    &:before {
      display: inline-block;
      content: "";
      background: url(${encodedIconArrowRight({
          fill: baseColors.neutral90,
        })})
        center no-repeat;
      width: 16px;
      height: var(--line-height-base);
      margin-block-start: 1px;
      margin-inline-end: ${pxToRem(12)};

      /* Make sure the arrow color changes on darker backgrounds */
      .a-bg-neutral80 &,
      .a-bg-neutral90 & {
        background: url(${encodedIconArrowRight({
            fill: baseColors.neutral00,
          })})
          center no-repeat;
      }
    }
  }

  > li + li {
    margin-block-start: var(--padding-rg);
  }
`;
