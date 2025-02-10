import { renderBlock } from "../helper/renderBlock";
import { useBlockForgeContext } from "../hooks/useBlockForgeContext";
import { EditorComponentProps } from "../types/types";

export const Editor: React.FC<EditorComponentProps> = () => {
  const { editorState } = useBlockForgeContext();
  return <div>{renderBlock(editorState.block)}</div>;
};
