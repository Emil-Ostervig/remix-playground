import React, { ComponentType, useMemo } from 'react';
import { ModulesAsKeys } from '~/api/types';

type ModuleBase = { type: string };

type Props = {
  elements?: ModuleBase[];
  indexOffset?: number;
};

export type Blocks = {
  [key in ModulesAsKeys]?: ComponentType | any;
};

const Noop = ({ children }: { children: ComponentType }) => <>{children}</>;

const blocks: Blocks = {
  M010HeroModule: React.lazy(() => import('~/components/modules/M10Hero/M10Hero').then((mod) => ({ default: mod.M10Hero })))
};

const DynamicBlock = ({ element, index, count }: { element: ModuleBase; index: number; count: number }) => {
  const Block = blocks[element.type as keyof Blocks] || Noop;
  return (
    <Block {...(element as object)} />
  );
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
