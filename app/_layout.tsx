import { Stack } from "expo-router";
import { useState, createContext, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import type { Theme, ThemeContextType } from "./theme";
import { ThemeContext, LightTheme, DarkTheme } from "./theme";

import { app } from "../firebaseConfig"

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, fontsError] = useFonts({
        'DM-Serif': require('../assets/fonts/DMSerifDisplay-Regular.ttf'),
        'Manrope': require('../assets/fonts/Manrope-Variable.ttf')
    })

    const [theme, setTheme] = useState<Theme>(LightTheme);

    // yea this is kinda stoopid
    const _setTheme = (newTheme: string) => {
        setTheme(newTheme == "dark" ? DarkTheme : LightTheme);
    };

    const themeContextValue: ThemeContextType = {
        theme: theme,
        setTheme: _setTheme,
    };

    useEffect(() => {
        if (fontsLoaded || fontsError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontsError]);

    if (!fontsLoaded && !fontsError) {
        return null;
    }

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </ThemeContext.Provider>
    );
}
