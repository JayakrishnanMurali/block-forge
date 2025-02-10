import { BlockDefinition } from "../types/types";

export const Text: BlockDefinition = {
  id: "text",
  name: "Text",
  type: "text",
  content: "Hello, World!",
  props: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
};
