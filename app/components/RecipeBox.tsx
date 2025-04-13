import { View, ImageBackground, Text, StyleSheet } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

type RecipeBoxProps = {
    imagePath: string;
    textRecipe: string;
}

export default function RecipeBox({
    imagePath,
    textRecipe
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
                        <View style={styles.recipeBox}>
                            <Text style={styles.text}>
                                {textRecipe}
                            </Text>
                        </View>
                    </LinearGradient>
                }
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    recipeBox: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexDirection: "column",
        flexShrink: 0,

        width: 185,
        height: 160,
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
    }
})


