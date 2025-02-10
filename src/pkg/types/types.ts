export type BlockForgeContextType = {
  availableBlocks: BlockDefinition[];
  editorState: EditorState;
  isEditable: boolean;

  // setters
  registerBlock: (blocks: BlockDefinition[]) => BlockDefinition[];
  addBlock: (block: BlockDefinition) => void;
  updateEditorState: (state: EditorState) => void;
  updateIsEditable: (editable: boolean) => void;
};

export type BlockTypes =
  | "text"
  | "container"
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

export type EditorState = {
  block: BlockDefinition;
  selectedBlockId: string | undefined;
};

export type HookReturnType = {
  addBlock: (block: BlockDefinition) => void;
  registerBlock: (blocks: BlockDefinition[]) => BlockDefinition[];
};

export type EditorComponentProps = {
  isEditable?: boolean;
};
