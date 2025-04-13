import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack
            screenOptions={{
                contentStyle: {
                    backgroundColor: "#FFFDF2",
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: "Home",
                    headerLargeTitle: true,
                    headerLargeTitleStyle: { fontFamily: "DM-Serif" },
                    headerTitleStyle: { fontFamily: "DM-Serif" },
                    headerShadowVisible: false,
                }}
            />
        </Stack>
    );
}
