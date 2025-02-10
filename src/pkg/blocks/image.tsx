import { BlockDefinition } from "../types/types";

export const Image: BlockDefinition = {
  id: "image",
  name: "Image",
  type: "image",
  props: {
    src: "https://placehold.co/600x400",
    alt: "Placeholder Image",
  },
};
