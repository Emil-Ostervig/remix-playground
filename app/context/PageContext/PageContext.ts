import { createContext, useContext } from 'react';
import { Pages } from '~/api/types';

export const PageContext = createContext<Pages | undefined>(undefined);
export const usePage = () => useContext(PageContext);
