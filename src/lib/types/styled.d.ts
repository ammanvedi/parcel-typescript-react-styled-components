import 'styled-components';
import { StyledCSS, ThemeColors } from './Theme';

export interface UITheme {
    colors: ThemeColors;
}

declare module 'styled-components' {
    export interface DefaultTheme extends UITheme {}
}
