import { View, ImageBackground, Text, StyleSheet } from "react-native";

type TagProp = {
    tagType: string;
}

export default function Tag({
    tagType,
}: TagProp
) {
    return (
        
        <View style={styles.tag}>
            <Text>
                {tagType}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tag: {
        flex: 1,
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 4,
        paddingBottom:4,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        borderRadius: 360,
        borderWidth: 1,
        borderColor: 'rgba(238, 206, 159, 0.40)',
    },
    text: {
        color: 'white',
        fontFamily: 'Manrope',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16
    }
})