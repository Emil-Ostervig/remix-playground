import React, { ComponentType } from 'react';
import {  ModulesAsKeys } from '~/api/types';
import { FallbackBlock } from './FallBackBlock';
type ModuleBase = { type: string };

const M010HeroModule = React.lazy(() =>
  import('~/components/modules/M10Hero/M10Hero').then((mod) => ({
    default: mod.M10Hero,
  }))
);

const M100RichTextModule = React.lazy(() =>
  import('~/components/modules/M100RichText/M100RichText').then((mod) => ({
    default: mod.M100RichText,
  }))
);

type Props = {
  elements?: ModuleBase[];
  indexOffset?: number;
};

export type Blocks = {
  [key in ModulesAsKeys]?: ComponentType | any;
};

const blocks: Blocks = {
  M010HeroModule: M010HeroModule,
  M100RichTextModule: M100RichTextModule,
};

const DynamicBlock = ({ element }: { element: ModuleBase; index: number; count: number }) => {
  const Block = blocks[element.type as keyof Blocks] || FallbackBlock;
  return <Block {...(element as object)} />;
};

export const DynamicBlocks = ({ elements, indexOffset = 0 }: Props) => {
  if (!elements?.length) {
    return null;
  }

  return (
    <>
      {elements?.map((element, index) => (
        <DynamicBlock key={index} element={element} index={index + indexOffset} count={elements.length} />
      ))}
    </>
  );
};
