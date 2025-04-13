import { View, ImageBackground, Text, StyleSheet } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import Tag from "../components/Tags";
import CircleTag from "../components/TagsCircle";

type RecipeBoxProps = {
    imagePath: string;
    textRecipe: string;
    optHeight?: number;
    optWidth?: number;
    // if you want an invisible, just pass in invisible
    tagString1: string;
    tagString2: string;
}

export default function RecipeBox({
    imagePath,
    textRecipe,
    optHeight,
    optWidth,
    tagString1,
    tagString2
}: RecipeBoxProps
) {
    return (
        <ImageBackground
                source={{uri: imagePath}} // Path to your image
                style={styles.backgroundImage}
                resizeMode="cover" // or 'stretch', 'contain', etc.
                >
                {
                    <LinearGradient colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.85)"]} 
                    style={styles.linearGradient} 
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 0, y: 1 }}>
                        <View style={[styles.recipeBox, {width: optWidth, height: optHeight}]}>
                            <View style={styles.text_holder}>
                                <Text style={styles.text}>
                                    {textRecipe}
                                </Text>
                                <CircleTag tagType={tagString1}/>
                                <CircleTag tagType={tagString2}/>
                            </View>
                        </View>
                    </LinearGradient>
                }
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    recipeBox: {
        width: 181,
        height: 160,
        flexDirection: "column",
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexShrink: 0,

        padding: 16,
        paddingLeft: 20,
        gap: 4,
        borderRadius: 8,
    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 8,
        overflow: 'hidden'
    },

    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: 'white',
        fontFamily: 'Manrope',
        fontWeight: 'semibold',
        fontSize: 14,
    },

    text_holder: {
        flexDirection: "row",
        alignItems: 'flex-end',
        gap: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.00)'
    }
})


