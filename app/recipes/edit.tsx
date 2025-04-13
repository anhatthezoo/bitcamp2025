import { Stack } from "expo-router";
import { View, Text, ScrollView } from "react-native";

export default function RecipeScreen() {
    return (
        <View>
            <Stack.Screen
                options={{ title: "Edit Recipe", headerLargeTitle: true }}
            />
            <ScrollView
                style={{ backgroundColor: "white" }}
                contentInsetAdjustmentBehavior={"automatic"}
            ></ScrollView>
        </View>
    );
}
