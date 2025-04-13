import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import CartItems from "../../components/ShoppingComponent";
import Checkbox from "expo-checkbox";

export default function Home() {
    return (
        <ScrollView
            style={{ backgroundColor: "white" }}
            contentInsetAdjustmentBehavior={"automatic"}
        >
            <View
                style={{
                    paddingHorizontal: 16,
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <Text style={{ alignSelf: "flex-start", fontFamily: "DM-Serif", fontSize: 26, lineHeight: 32}}>Total: $20.57</Text>
                <TouchableOpacity>
                    <View
                        style={{
                            alignSelf: "flex-start",
                            borderRadius: 8,
                            overflow: "hidden",
                            paddingHorizontal: 16,
                            paddingVertical: 8,
                            backgroundColor: "#BC6C25",
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontFamily: "Manrope",
                                fontSize: 14,
                                lineHeight: 20,
                                fontWeight: 600,
                            }}
                        >
                            Clear cart
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.categoryTitleAndItems}>
                <View>
                    <Text style={styles.titleText}>Spices</Text>
                </View>
                <View style={styles.boughtItems}>
                    <CartItems
                        imagePath="https://www.kroger.com/product/images/xlarge/front/0008983618525"
                        itemName="Tumeric"
                        storeName="Harris Teeter"
                        priceNumber={0.67}
                    />
                    <CartItems
                        imagePath="https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormickforchefs2017/products/600/cinnamonsticks.png?rev=14b2c700e6ae4e3c9766151f6ebc4c9f&vd=20210519T065807Z&extension=webp&hash=0F5ED6E50A24AF84069DFAF265B6DF24"
                        itemName="Cinnamon"
                        storeName="Whole Foods"
                        priceNumber={1.67}
                    />
                    <CartItems
                        imagePath="https://savorygourmet.com/cdn/shop/products/D_ALESSANDRO_Star_Anise_Whole_6_oz_10721_packaging_471224d0-1044-4cc0-b0c9-f1d17a206099_2000x2000.png?v=1738755702"
                        itemName="Star Anis"
                        storeName="Harris Teeter"
                        priceNumber={0.59}
                    />
                </View>
            </View>

            <View style={styles.categoryTitleAndItems}>
                <View>
                    <Text style={styles.titleText}>Vegetables</Text>
                </View>
                <View style={styles.boughtItems}>
                    <CartItems
                        imagePath="https://store.eatthekiwi.com/cdn/shop/files/NZBroccoli.png?v=1725856716"
                        itemName="Brocolli"
                        storeName="Giant"
                        priceNumber={3.58}
                    />
                    <CartItems
                        imagePath="https://www.lipmanfamilyfarms.com/wp-content/uploads/2020/09/Colored-Pepper-hero@2x.png"
                        itemName="Bell Peppers"
                        storeName="Whole Foods"
                        priceNumber={5.23}
                    />
                </View>
            </View>
            <View style={styles.categoryTitleAndItems}>
                <View>
                    <Text style={styles.titleText}>Miscellaneous </Text>
                </View>
                <View style={styles.boughtItems}>
                    <CartItems
                        imagePath="https://panamarbakery.com/public/Image/2021/3/161547156013789normal.png"
                        itemName="Bread"
                        storeName="Harris Teeter"
                        priceNumber={3.59}
                    />
                    <CartItems
                        imagePath="https://manischewitz.com/wp-content/uploads/2014/09/medium-egg-noodles-1024x591.png"
                        itemName="Noodles"
                        storeName="Whole Foods"
                        priceNumber={2.67}
                    />
                    <CartItems
                        imagePath="https://www.missionfoods.com/wp-content/uploads/2022/07/product-soft-taco-flour-tortillas-front.png"
                        itemName="Tortilla"
                        storeName="Giant"
                        priceNumber={2.57}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    categoryTitleAndItems: {
        flex: 1,
        width: 402,
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 4,
        paddingBottom: 8,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
    },

    wfowijfew: {
        flex: 1,
        width: "100%",
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 4,
        paddingBottom: 8,
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 16,
    },

    titleText: {
        color: "#000",
        fontFamily: "DM-Serif",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 32,
    },

    boughtItems: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 8,

        borderRadius: 15,
        backgroundColor: "#FFF1DC",
        overflow: "hidden",
    },
});
