import React from "react";

export type MaybeButtonRef =
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined;

export type MaybeLinkRef =
  | ((instance: HTMLLinkElement | null) => void)
  | React.RefObject<HTMLLinkElement>
  | null
  | undefined;

export type MaybeButtonOrLinkRef =
  | ((instance: HTMLButtonElement | null) => void)
  | ((instance: HTMLLinkElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | React.RefObject<HTMLLinkElement>
  | null
  | undefined;

export type MaybeSelectRef =
  | ((instance: HTMLSelectElement | null) => void)
  | React.RefObject<HTMLSelectElement>
  | null
  | undefined;

export type MaybeInputRef =
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;
