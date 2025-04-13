import { Stack } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function RecipeScreen() {
    const params = useSearchParams();

    return (
        <View style={{ flex: 1 }}>
            {" "}
            {/* Parent container takes full screen */}
            <Stack.Screen
                options={{
                    title: `Edit ${params.get("name")}`,
                    headerLargeTitle: true,
                    headerTitleStyle: { fontFamily: "DM-Serif" },
                    headerLargeTitleStyle: { fontFamily: "DM-Serif" },
                }}
            />
            <ScrollView
                style={{ flex: 1, padding: 16, backgroundColor: "white" }} // ScrollView takes full height
                contentInsetAdjustmentBehavior={"automatic"}
            >
                <View style={{ padding: 16, borderRadius: 8, backgroundColor: "rgba(0, 0, 0, 0.05)", borderWidth: 1, borderColor: "rgba(0, 0, 0, 0.15)" }}>
                    <Text
                        style={{
                            fontFamily: "Courier New", // or a monospaced font you load
                            fontSize: 14,
                            color: "#333",
                        }}
                    >
                        {params.get("cooklang")}
                    </Text>
                </View>

                <TouchableOpacity style={{ flex: 1, paddingTop: 16 }}>
                    <View
                        style={{
                            borderRadius: 8,
                            overflow: "hidden",
                            paddingHorizontal: 16,
                            paddingVertical: 8,
                            backgroundColor: "#BC6C25",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontFamily: "Manrope",
                                fontSize: 14,
                                lineHeight: 20,
                                fontWeight: 600,
                            }}
                        >
                            Save
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
