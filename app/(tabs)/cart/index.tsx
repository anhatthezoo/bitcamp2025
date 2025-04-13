import { View, Text, StyleSheet, ScrollView } from "react-native";
import CartItems from "../../components/ShoppingComponent";
import Checkbox from 'expo-checkbox';

export default function Home() {
    return (
        <ScrollView contentInsetAdjustmentBehavior={"automatic"}>
            <View style={styles.categoryTitleAndItems}>
                <Text style={styles.titleText}>Spices</Text>
                <View style={styles.boughtItems}>
                    <CartItems imagePath="https://store.eatthekiwi.com/cdn/shop/files/NZBroccoli.png?v=1725856716"
                    itemName="Brocolli"
                    storeName="Harris Teeter"
                    priceNumber={3}
                    />
                    <CartItems imagePath="https://store.eatthekiwi.com/cdn/shop/files/NZBroccoli.png?v=1725856716"
                    itemName="Brocolli"
                    storeName="Harris Teeter"
                    priceNumber={3}
                    />
                    <CartItems imagePath="https://store.eatthekiwi.com/cdn/shop/files/NZBroccoli.png?v=1725856716"
                    itemName="Brocolli"
                    storeName="Harris Teeter"
                    priceNumber={3}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    categoryTitleAndItems: {
        flex: 1,
        width: 402,
        paddingRight:16,
        paddingLeft:16,
        paddingTop:4,
        paddingBottom:8,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
    },

    titleText: {
        color: '#000',
        fontFamily: "DM Serif Display",
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 32,
    },

    boughtItems: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,

        borderRadius: 15,
        backgroundColor: '#FFF1DC',
        overflow: 'hidden'
    }
})

