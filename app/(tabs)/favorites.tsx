import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import CNavigationLayout from "../components/layouts/CNavigationLayout";
import RecipeBox from "../components/RecipeBox";

export default function Tab() {
    return (
        <CNavigationLayout headerOptions={ {title: "Favorites"} }>

            <View style={{...styles.row_containerGenre}}>

                <RecipeBox imagePath="https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png"
                textRecipe="Italian"/>
                <RecipeBox imagePath="https://www.allincrete.com/wp-content/uploads/2019/12/two-lamb-gyros-with-feta-cheese-tzatziki-sauce-allincrete.com_.jpg"
                textRecipe="Greek"/>
            </View>
            <View style={{...styles.row_containerGenre}}>
                <RecipeBox imagePath="https://hips.hearstapps.com/hmg-prod/images/soba-royalty-free-image-1621288461."
                textRecipe="East Asian"/>
                <RecipeBox imagePath="https://springsmag.com/wp-content/uploads/2017/03/Tacos-1-696x464.png"
                textRecipe="Mexican"/>
            </View>
        </CNavigationLayout>
    );
}

const styles = StyleSheet.create({
    row_containerGenre: {
        flex: 1,
        flexDirection: "row", 
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

