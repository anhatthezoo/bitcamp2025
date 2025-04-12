import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import CNavigationLayout from "../components/layouts/CNavigationLayout";

export default function Tab() {
    return (
        <CNavigationLayout headerOptions={ {title: "Home"} }>
            <Text>home screen</Text>
        </CNavigationLayout>
    );
}


