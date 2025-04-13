import { View, ImageBackground, Text, StyleSheet } from "react-native";

type TagProp = {
    tagType: string;
}

export default function CircleTag({
    tagType,
}: TagProp
) {
    return (
        
        <View style={[styles.tag, {backgroundColor: tagType}]}/>
    )
}

const styles = StyleSheet.create({
    tag: {
        flex: 1,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#70A1FF',
    }
})