export type BlockForgeContextType = {
  availableBlocks: BlockDefinition[];
  editorState: unknown; // TODO: Define editor state type
  isEditable: boolean;

  // setters
  registerBlock: (blocks: BlockDefinition[]) => void;
  updateEditorState: (state: unknown) => void;
  updateIsEditable: (editable: boolean) => void;
};

export type BlockTypes =
  | "text"
  | "image"
  | "video"
  | "audio"
  | "code"
  | "quote";

export type BlockDefinition = {
  id: string;
  name: string;
  type: BlockTypes;
  props?: Record<string, unknown>;
  blocks?: BlockDefinition[];
  content?: string;
};

export type HookReturnType = {
  addBlock: (block: BlockDefinition) => void;
  registerBlock: (blocks: BlockDefinition[]) => BlockDefinition[];
};
