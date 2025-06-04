import type { ImageSize } from "types/graphql-schema";

type DeepNullable<T> = T extends object
  ? { [K in keyof T]?: DeepNullable<T[K]> | null }
  : T | null;

type Data = Record<string, DeepNullable<ImageSize>>;

const generateSrcSet = (data: Data) => {
  return Object.keys(data)
    .map((size) => {
      const sizeData = data[size];
      return `${sizeData.webp?.url} ${sizeData.webp?.width}w`;
    })
    .join(", ");
};

const sizes =
  "((min-width: 667px) and (max-width: 1400px)) 1400px, ((min-width: 375px) and (max-width: 667px)) 750px, (max-width: 375px) 500px, 1400px";

export { generateSrcSet, sizes };
