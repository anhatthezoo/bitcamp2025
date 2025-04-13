import { View, Text } from "react-native";
import { ScrollView } from "react-native";

export default function Home() {
    return (
        <ScrollView contentInsetAdjustmentBehavior={"automatic"}>
            <View>
                <Text>cart</Text>
            </View>
        </ScrollView>
    )
}