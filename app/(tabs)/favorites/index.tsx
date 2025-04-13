import { Stack } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CNavigationLayout from "../../components/layouts/CNavigationLayout";
import RecipeBox from "../../components/RecipeBox";

export default function Tab() {
    return (
        <ScrollView contentInsetAdjustmentBehavior={"automatic"}>
            <View style={{ ...styles.rowContainerGenre }}>
                <RecipeBox imagePath="https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png"
                    textRecipe="Italian"
                    optHeight={181}
                    optWidth={181}
                    tagString1='rga(0,0,0,0)' 
                    tagString2='rga(0,0,0,0)' />
                <RecipeBox imagePath="https://www.allincrete.com/wp-content/uploads/2019/12/two-lamb-gyros-with-feta-cheese-tzatziki-sauce-allincrete.com_.jpg"
                    textRecipe="Greek"
                    optHeight={181}
                    optWidth={181} 
                    tagString1='rga(0,0,0,0)' 
                    tagString2='rga(0,0,0,0)' />
            </View>
            <View style={{ ...styles.rowContainerGenre }}>
                <RecipeBox imagePath="https://hips.hearstapps.com/hmg-prod/images/soba-royalty-free-image-1621288461."
                    textRecipe="East Asian"
                    optHeight={181}
                    optWidth={181} 
                    tagString1='rga(0,0,0,0)' 
                    tagString2='rga(0,0,0,0)' />
                <RecipeBox imagePath="https://springsmag.com/wp-content/uploads/2017/03/Tacos-1-696x464.png"
                    textRecipe="Mexican"
                    optHeight={181}
                    optWidth={181} 
                    tagString1='rga(0,0,0,0)' 
                    tagString2='rga(0,0,0,0)' />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rowContainerGenre: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    columnContainerGenre: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
