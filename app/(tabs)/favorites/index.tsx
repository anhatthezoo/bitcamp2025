import { Stack } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CNavigationLayout from "../../components/layouts/CNavigationLayout";
import ListLayout from "../../components/FavoriteListLayout";
import SearchHeader from "@/app/components/SearchHeader";
import { useContext } from "react";
import { ThemeContext } from "@/app/theme";
import FolderLayout from "../../components/FavoriteFolderLayout"

export default function Tab() {
    const theme = useContext(ThemeContext).theme;
    return (
        <ScrollView style={{ backgroundColor: "white" }}
            contentInsetAdjustmentBehavior={"automatic"}
            stickyHeaderIndices={[0]}>
                
            <SearchHeader />

            <View style={{ paddingLeft: theme.horizontalInset }}>

                <View style={{ gap: 8, paddingBottom: 16 }}>
                    <Text style={styles.titleText}>
                        Collections
                    </Text>
                    <View style={{flexDirection: "row", gap: 8}}>
                                            
                        <FolderLayout collectionName="Favorite Desserts"/>
                        <FolderLayout collectionName="Saved for mom"/>

                        
                    </View>
                    <View style={{flexDirection: "row", gap: 8}}>
                        <FolderLayout collectionName="Birthday Gifts"/>
                        <FolderLayout collectionName="Game day snack"/>
                    </View>
                </View>


                <View style={styles.listLayoutWithTitle}>
                    <Text style={styles.titleText}>
                        All Recipes
                    </Text>
                    <View style={{ ...styles.listLayout }}>
                        <ListLayout imagePath="https://media.cnn.com/api/v1/images/stellar/prod/220926135112-01-body-chinese-foods-ziao-long-bao.jpg?q=w_1110,c_fill"
                            recipeName="Dumplings"
                            author="Andrea Shulman"
                        />
                        <ListLayout imagePath="https://www.emborg.com/app/uploads/2023/07/1200x1200px_Easy_Cheese_Omelette.png"
                            recipeName="Omelets"
                            author="Olivia Newman"
                        />
                        <ListLayout imagePath="https://www.allrecipes.com/thmb/q-IfK20zxeyp1DgKWhrVp6CQ43w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-89268-triple-dipped-fried-chicken-beauty-4x3-3961ac838ddd41958e7cb9f49376cd68.jpg"
                            recipeName="Fried Chicken"
                            author="Wayne Parker"
                        />
                        <ListLayout imagePath="https://www.skinnytaste.com/wp-content/uploads/2011/07/Pineapple-Shrimp-Fried-Rice-10.jpg"
                            recipeName="Dumplings"
                            author="Drake Shell"
                        />
                    </View>
                </View>
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
    listLayoutWithTitle: {
        flex: 1,
        width: 402,
        paddingTop: 4,
        paddingBottom: 8,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4
    },
    listLayout: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8
    },
    titleText: {
        color: '#000',
        fontFamily: "DM Serif Display",
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 32,
    }
});
