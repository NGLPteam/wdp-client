import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import LoadingSkeleton from "../LoadingSkeleton";

const CIRCLE_SIZE = pxToRem(80);

export const Skeleton = styled(LoadingSkeleton)`
  padding-block-start: ${CIRCLE_SIZE};
  padding-block-end: ${CIRCLE_SIZE};
`;
