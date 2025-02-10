import { createContext } from "react";
import { BlockForgeContextType } from "../types/types";
import { Container } from "../blocks";

export const initialContext: BlockForgeContextType = {
  availableBlocks: [],
  editorState: {
    block: Container,
    selectedBlockId: undefined,
  },
  isEditable: true,

  // setters
  registerBlock: () => [],
  addBlock: () => null,
  updateEditorState: () => null,
  updateIsEditable: () => null,
};

export const BlockForgeContext =
  createContext<BlockForgeContextType>(initialContext);
