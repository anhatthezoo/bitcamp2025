import { ThemeContext } from "@/app/theme";
import { Stack } from "expo-router";
import { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Animated, {
    SharedValue,
    interpolate,
    useAnimatedStyle,
    useScrollViewOffset,
} from "react-native-reanimated";
import { useAnimatedRef } from "react-native-reanimated";
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";

type CNavHeaderOptions = {
    title?: string;
    leftItems?: React.ReactNode;
    rightItems?: React.ReactNode;
};

type CNavHeaderProps = {
    options?: CNavHeaderOptions;
    scrollOffset: SharedValue<number>;
};

type CNavLayoutProps = {
    children: React.ReactNode;
    headerChildren?: React.ReactNode;
    headerOptions?: CNavHeaderOptions;
};

export default function CNavigationLayout({
    children,
    headerChildren,
    headerOptions = { title: "Title" },
}: CNavLayoutProps) {
    const theme = useContext(ThemeContext).theme;
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(scrollRef);

    const headerTextAnimatedStyle = useAnimatedStyle(() => {
        return {
            fontSize: interpolate(scrollOffset.value, [0, 100], [36, 32]),
        };
    });

    return (
        <View
            style={{
                ...styles.container,
                paddingHorizontal: theme.horizontalInset,
            }}
        >
            <Stack.Screen
                options={{
                    header: () => (
                        <CNavigationHeader
                            options={headerOptions}
                            scrollOffset={scrollOffset}
                        />
                    ),
                }}
            />
            <Animated.ScrollView style={{ flex: 1 }} ref={scrollRef}>
                <View style={{ flexDirection: "column" }}>
                    <Animated.Text
                        style={[
                            { fontFamily: "DM-Serif", fontSize: 36 },
                            headerTextAnimatedStyle,
                        ]}
                    >
                        {headerOptions?.title}
                    </Animated.Text>
                    {headerChildren}
                </View>

                {children}
            </Animated.ScrollView>
        </View>
    );
}

const CNavigationHeader = ({ options, scrollOffset }: CNavHeaderProps) => {
    const insets = useSafeAreaInsets();
    const theme = useContext(ThemeContext).theme;

    const headerBackgroundAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(scrollOffset.value, [0, 128], [0, 1]),
        };
    });

    return (
        <Animated.View
            style={[
                {
                    flexDirection: "row",
                    backgroundColor: "red",
                },
                headerBackgroundAnimatedStyle,
            ]}
        >
            <SafeAreaView
                edges={["right", "left", "top"]}
                style={{
                    flexDirection: "column",
                    paddingHorizontal: theme.horizontalInset,                 
                }}
            >
                <View
                    style={{
                        minWidth: "auto",
                        justifyContent: "space-between",
                        minHeight: 32,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignSelf: "flex-start",
                        }}
                    >
                        {options?.leftItems}
                    </View>

                    <View
                        style={{ flexDirection: "row", alignSelf: "flex-end" }}
                    >
                        {options?.rightItems}
                    </View>
                </View>
            </SafeAreaView>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
