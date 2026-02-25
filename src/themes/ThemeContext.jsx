import { createContext, useContext } from 'react';
import { defaultTheme } from './index';

export const ThemeContext = createContext(defaultTheme);
export const useTheme = () => useContext(ThemeContext);
