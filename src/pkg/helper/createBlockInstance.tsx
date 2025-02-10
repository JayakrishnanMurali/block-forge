import { v4 as uuid } from "uuid";
import { BlockDefinition } from "../types/types";

export function createBlockInstance(block: BlockDefinition): BlockDefinition {
  return {
    ...block,
    id: uuid(),
    blocks: block.blocks ? block.blocks.map(createBlockInstance) : [],
  };
}
