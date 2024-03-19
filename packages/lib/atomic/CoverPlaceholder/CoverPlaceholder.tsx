import { useId } from "react";
import { mkState, nextT, mkAlea } from "@spissvinkel/alea";
import chunk from "chunk-text";
import { pxToRem } from "../../theme/functions";
import * as Styled from "./CoverPlaceholder.styles";
import type { AleaState } from "@spissvinkel/alea";

export default function CoverPlaceholder({
  seed,
  title,
  maxWidth,
  maxHeight,
  style,
}: Props) {
  const uid = useId();
  const randomState = mkState(seed);
  const nextBool: (state: AleaState) => boolean = nextT((n) => n < 0.5);
  const mkNext0toMax = (
    state: AleaState,
    max: number,
  ): ((state: AleaState) => number) => nextT((n) => Math.floor(n * max));

  const { random } = mkAlea(seed);

  // eslint-disable-next-line comma-spacing
  const mkNextElement = <T,>(values: T[]): (() => T) => {
    const nextIndex = mkNext0toMax(randomState, values.length);
    return () => values[nextIndex(randomState)];
  };

  const themes = [
    {
      // Natural
      titleBackground: "#D4C1AE",
      titleColor: "#61574E",
      background: "#9E8E7E",
      foreground: "#807366",
    },
    {
      // Blue
      titleBackground: "#BEC4D4",
      titleColor: "#4F5870",
      background: "#8492B5",
      foreground: "#687594",
    },
    {
      // Green
      titleBackground: "#B1C4B1",
      titleColor: "#4F5C4E",
      background: "#829782",
      foreground: "#697A69",
    },
    {
      // Orange
      titleBackground: "#B1C4B1",
      titleColor: "#4F5C4E",
      background: "#829782",
      foreground: "#697A69",
    },
    {
      // Pink
      titleBackground: "#DEB6BF",
      titleColor: "#754C56",
      background: "#BA828F",
      foreground: "#9E6774",
    },
  ];
  const nextTheme = mkNextElement(themes);

  const titlePositionTop = nextBool(randomState);
  const theme = nextTheme();

  const gridSize = 90;
  const width = gridSize * 3;
  const height = gridSize * 4;
  const charactersPerLine = 25;
  const lineHeight = 15;
  const titleLeftPadding = 25;
  const titleTopPadding = 20;
  const titleBottomPadding = 25;

  const titleChunks = title ? chunk(title, charactersPerLine) : [];
  let titleHeight =
    titleChunks.length <= 0
      ? 0
      : titleChunks.length * lineHeight + titleTopPadding + titleBottomPadding;
  if (titleHeight < gridSize) titleHeight = gridSize;
  const titlePositionY = titlePositionTop ? 0 : height - titleHeight;

  // eslint-disable-next-line prefer-const
  let nw, ne, se, sw, circle, halfCircle;

  // eslint-disable-next-line prefer-const
  nw = {
    path: <path d={`M 0, 90 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180, 0`} />,
    debug: "nw",
    preferences: {
      n: null,
      e: mkNextElement([ne, se]),
      s: mkNextElement([se, sw, halfCircle]),
      w: null,
    },
  };
  ne = {
    path: <path d={`M -90, 90 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180, 0`} />,
    debug: "ne",
    preferences: {
      n: null,
      e: null,
      s: mkNextElement([se, sw, halfCircle]),
      w: mkNextElement([nw, sw]),
    },
  };
  se = {
    path: <path d={`M -90, 0 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180, 0`} />,
    debug: "se",
    preferences: {
      n: mkNextElement([nw, ne]),
      e: null,
      s: null,
      w: mkNextElement([nw, sw]),
    },
  };
  sw = {
    path: <path d={`M 0, 0 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180, 0`} />,
    debug: "sw",
    preferences: {
      n: mkNextElement([nw, ne]),
      e: mkNextElement([ne, se]),
      s: null,
      w: null,
    },
  };
  // eslint-disable-next-line prefer-const
  circle = {
    path: <circle cx="45" cy="45" r="45" />,
    debug: "circle",
    preferences: {
      n: mkNextElement([halfCircle]),
      e: mkNextElement([halfCircle]),
      s: mkNextElement([halfCircle]),
      w: mkNextElement([halfCircle]),
    },
  };
  halfCircle = {
    path: <path d={`M 0, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90, 0`} />,
    debug: "circle",
    preferences: {
      n: mkNextElement([nw, ne]),
      e: null,
      s: null,
      w: null,
    },
  };

  const nextShape = mkNextElement([nw, ne, se, sw, circle, halfCircle]);
  const nextStart = mkNextElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  const pattern = [...Array(12)];
  pattern[nextStart()] = nextShape();
  pattern[nextStart()] = nextShape();

  const populate = (cell: Cell, index: number) => {
    if (cell) return;
    const n = pattern[index - 3] || null;
    const e = (index + 1) % 3 ? pattern[index + 1] : null;
    const s = pattern[index + 3] || null;
    const w = index % 3 ? pattern[index - 1] : null;
    if (n?.preferences?.s) return (pattern[index] = n.preferences.s());
    if (e?.preferences?.w) return (pattern[index] = e.preferences.w());
    if (s?.preferences?.n) return (pattern[index] = s.preferences.n());
    if (w?.preferences?.e) return (pattern[index] = w.preferences.e());
    if (random() > 0.8) return (pattern[index] = nextShape());
  };

  pattern.forEach(populate);
  pattern.forEach(populate);
  pattern.forEach(populate);

  const maxStyle = {
    maxWidth: pxToRem(maxWidth || width),
    maxHeight: pxToRem(maxHeight || height),
  };

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ ...maxStyle, ...style }}>
      {title && <title>{title}</title>}
      <clipPath id={`placeholder-mask${uid}`}>
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill={theme.background}
        />
      </clipPath>
      <g clipPath={`url(#placeholder-mask${uid})`}>
        {pattern.map((cell, index) => (
          <svg
            key={index}
            color={theme.foreground}
            y={Math.floor(index / 3) * gridSize}
            x={Math.floor(index % 3) * gridSize}
          >
            <rect
              width={gridSize + 1}
              height={gridSize + 1}
              fill={theme.background}
            />
            {cell?.path}
          </svg>
        ))}

        <>
          <rect
            y={titlePositionY}
            width={width}
            height={titleHeight}
            fill={theme.titleBackground}
          />
          {titleChunks &&
            titleChunks.map((row, index) => (
              <Styled.TitleText
                key={index}
                color={theme.titleColor}
                x={titleLeftPadding}
                y={titlePositionY + titleTopPadding + (index + 1) * lineHeight}
              >
                {row}
              </Styled.TitleText>
            ))}{" "}
        </>
      </g>
    </svg>
  );
}

interface Cell {
  debug: string;
  path: React.ReactElement;
  preferences: Record<string, unknown>;
}

interface Props {
  maxWidth?: number;
  maxHeight?: number;
  seed: string;
  title?: string;
  style?: React.CSSProperties;
}
