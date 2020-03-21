import {
    DefaultTheme,
    FlattenSimpleInterpolation,
    ThemedCssFunction,
} from 'styled-components';

export type ThemeColors = {
    Primary: string;
    PrimaryText: string;
    Secondary: string;
    PrimaryReversed: string;
    SecondaryReversed: string;
    Background: string;
    Contour: string;
};

// This is the return type from using styled component's css`` format string function
export type StyledCSS = FlattenSimpleInterpolation;
