import "./App.css";
import { Editor, useBlockForge } from "./pkg";
import { Image, Text } from "./pkg/blocks";

function App() {
  const { addBlock, registerBlock } = useBlockForge();

  const blocks = registerBlock([Text, Image]);

  return (
    <div className="container">
      <div>
        <p>Toolbar</p>
        <div className="toolbar">
          {blocks.map((block) => (
            <button key={block.id} onClick={() => addBlock(block)}>
              {block.name}
            </button>
          ))}
        </div>
      </div>

      <Editor />
    </div>
  );
}

export default App;
