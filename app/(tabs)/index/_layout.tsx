import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack>
            <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Home",
                    headerLargeTitle: true,
                    headerLargeTitleStyle: { fontFamily: "DM-Serif" },
                    headerTitleStyle: { fontFamily: "DM-Serif" },
                }}
            />
        </Stack>
        </Stack>
    );
}
