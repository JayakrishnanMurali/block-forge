import { BlockDefinition } from "../types/types";

export const Container: BlockDefinition = {
  id: "container",
  name: "Container",
  type: "container",
  blocks: [],
  props: {
    style: {
      backgroundColor: "darkorange",
      padding: 16,
      margin: 16,
    },
  },
};
