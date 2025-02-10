# Block Forge - An easy way to create websites with blocks

### Roadmap

`Main Focus: Code Ugly but Functional. Optimize later.`

## API's

[x] `import {Editor, useBlockForge, BlockForgeProvider} from '@block-forge'`
[x] `import {Text, Image} from '@block-forge/blocks'`

## Code Example

```jsx
import { Editor, useBlockForge, BlockForgeProvider } from "@block-forge";
import { Text, Image } from "@block-forge/blocks";

const App = () => {
  const { registerBlock, addBlock } = useBlockForge();

  const blocks = registerBlock([
    {
      type: "text",
      render: <Text />,
    },
    {
      type: "image",
      render: <Image />,
    },
  ]);

  return (
    <BlockForgeProvider>
      <div>
        // Toolbar
        {blocks.map((block) => (
          <button onClick={() => addBlock(block.type)}>Add {block.type}</button>
        ))}
      </div>
      <Editor isEditable />
    </BlockForgeProvider>
  );
};
```
