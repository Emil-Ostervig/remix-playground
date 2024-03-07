import { createContext, useContext } from 'react';
import { Frame } from '~/api/types';

export const FrameContext = createContext<Frame | undefined>(undefined);
export const useFrame = () => useContext(FrameContext);
