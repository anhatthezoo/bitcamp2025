import { View, Text } from "react-native";
import { ScrollView } from "react-native";

export default function Home() {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}
            contentInsetAdjustmentBehavior={"automatic"}
            stickyHeaderIndices={[0]}>
            <View>
                <Text>cart</Text>
            </View>
        </ScrollView>
    )
}