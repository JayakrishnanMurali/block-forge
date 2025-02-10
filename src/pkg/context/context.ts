import { createContext } from "react";
import { BlockForgeContextType } from "../types/types";

export const initialContext: BlockForgeContextType = {
  availableBlocks: [],
  editorState: null,
  isEditable: true,

  // setters
  registerBlock: () => [],
  updateEditorState: () => null,
  updateIsEditable: () => null,
};

export const BlockForgeContext =
  createContext<BlockForgeContextType>(initialContext);
