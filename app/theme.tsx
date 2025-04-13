import { createContext } from "react";

// https://stackoverflow.com/a/71909826
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

type Theme = {
    colors: {
        background: Color,
        foreground: Color
    },
    horizontalInset: number
}

type ThemeContextType = {
    theme: Theme,
    setTheme: (newTheme: string) => void
}

export const LightTheme: Theme = {
    colors: {
        background: "#FFFDF2",
        foreground: "#000"
    },
    horizontalInset: 16
}

export const DarkTheme: Theme = {
    colors: {
        background: "#000",
        foreground: "#fff"
    },
    horizontalInset: 16
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: LightTheme,
    setTheme: () => {}
})

export type { Theme, ThemeContextType }