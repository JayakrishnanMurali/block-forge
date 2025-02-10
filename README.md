# Block Forge - An easy way to create websites with blocks

### Roadmap

`Main Focus: Code Ugly but Functional. Optimize later.`

## API's

[ ] `import {Canvas, useBlockForge, BlockForgeProvider} from '@block-forge'`
[ ] Pre-built blocks (e.g. `TextBlock`, `ImageBlock`, `VideoBlock`)

## Code Example

```jsx
import { Canvas, useBlockForge, BlockForgeProvider } from "@block-forge";
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
      <Canvas isEditable />
    </BlockForgeProvider>
  );
};
```
