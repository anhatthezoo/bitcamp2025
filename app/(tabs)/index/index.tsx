import { ThemeContext } from "@/app/theme";
import { useContext } from "react";
import { View, Text, ImageBackground, TextInput } from "react-native";
import { ScrollView } from "react-native";
import SearchHeader from "@/app/components/SearchHeader";
import RecipeBox from "@/app/components/RecipeBox";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
    const theme = useContext(ThemeContext).theme;
    return (
        <ScrollView
            style={{ backgroundColor: 'white' }}
            contentInsetAdjustmentBehavior={"automatic"}
            stickyHeaderIndices={[0]}
        >
            <SearchHeader />
            <View style={{ paddingLeft: theme.horizontalInset }}>
                <View style={{ paddingTop: 16, paddingVertical: 8, gap: 4 }}>
                    <Text
                        style={{
                            fontFamily: "DM-Serif",
                            fontSize: 24,
                            lineHeight: 32,
                        }}
                    >
                        Following
                    </Text>

                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{ columnGap: 8 }}
                        showsHorizontalScrollIndicator={false}
                    >
                        <RecipeListLargeItem
                            id=""
                            name="Curried Tilapia"
                            author="Johnathon Smith"
                            iconUri=""
                            imageUri="https://img.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/lp/meals/Pescatarian-meal-ginger-turmeric-tilapia-082019.jpg"
                        />

                        <RecipeListLargeItem
                            id=""
                            name="Baked Artichoke Pasta"
                            author="Jane Garcia"
                            iconUri=""
                            imageUri="https://cdn.centr.com/content/15000/14138/images/landscapewidedesktop3x-smoky-tomato-chicken--pasta-tray-bake-16.9.jpg"
                        />

                        <RecipeListLargeItem
                            id=""
                            name="Lemon Dressing Salad"
                            author="Liam Oliver"
                            iconUri=""
                            imageUri="https://www.healthifyme.com/blog/wp-content/uploads/2021/10/All-About-The-Right-Food-Plate-Method.jpg"
                        />
                    </ScrollView>
                </View>
            </View>

            <View style={{ paddingHorizontal: theme.horizontalInset }}>
                <View style={{ paddingTop: 16, paddingVertical: 8, gap: 4 }}>
                    <Text
                        style={{
                            fontFamily: "DM-Serif",
                            fontSize: 24,
                            lineHeight: 32,
                        }}
                    >
                        Discover
                    </Text>

                    <View style={{ gap: 8, width: '100%' }}>
                        <View style={{ flexDirection: "row", gap: 8, width: '100%' }}>
                            <RecipeBox
                                imagePath="https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png"
                                textRecipe="Italian"
                                optHeight={188}
                                optWidth={188}
                                tagString1="rga(0,0,0,0)"
                                tagString2="rga(0,0,0,0)"
                            />

                            <RecipeBox
                                imagePath="https://www.allincrete.com/wp-content/uploads/2019/12/two-lamb-gyros-with-feta-cheese-tzatziki-sauce-allincrete.com_.jpg"
                                textRecipe="Greek"
                                optHeight={188}
                                optWidth={188}
                                tagString1="rga(0,0,0,0)"
                                tagString2="rga(0,0,0,0)"
                            />
                        </View>
                        <View style={{ flexDirection: "row", gap: 8 }}>
                            <RecipeBox
                                imagePath="https://www.sanjanafeasts.co.uk/wp-content/uploads/2018/05/Creamy-Restaurant-Style-Matar-Paneer-1.jpg"
                                textRecipe="Indian"
                                optHeight={188}
                                optWidth={188}
                                tagString1="rga(0,0,0,0)"
                                tagString2="rga(0,0,0,0)"
                            />

                            <RecipeBox
                                imagePath="https://images-ext-1.discordapp.net/external/y5-4SQ1DXRUcV5hLSponxAN78xKt4tkHWrpxec_2jiQ/https/www.thefoodinmybeard.com/content/taco/whitepeople/wpt10.jpg?format=webp&width=1229&height=819"
                                textRecipe="Mexican"
                                optHeight={188}
                                optWidth={188}
                                tagString1="rga(0,0,0,0)"
                                tagString2="rga(0,0,0,0)"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

type RecipeListLargeItemProps = {
    id: string;
    name: string;
    author: string;
    iconUri: string;
    imageUri: string;
};

function RecipeListLargeItem({
    id,
    name,
    author,
    iconUri,
    imageUri,
}: RecipeListLargeItemProps) {
    return (
        <ImageBackground
            source={{ uri: imageUri }} // Path to your image
            style={{
                width: 290,
                height: 120,
                borderRadius: 8,
                overflow: "hidden",
            }}
            resizeMode="cover" // or 'stretch', 'contain', etc.
        >
            <LinearGradient
                colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.85)"]}
                style={{flex: 1,
                    justifyContent: "center",
                    alignItems: "center",}}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0, y: 1 }}
            >
                <View
                    style={{
                        width: 290,
                        height: 120,
                        borderRadius: 8,
                        padding: 8,
                        backgroundColor: "transparent",
                        justifyContent: "flex-end",
                        flex: 1,
                        flexDirection: "column",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontFamily: "Manrope",
                                    color: "white",
                                }}
                            >
                                {name}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Manrope",
                                    color: "white",
                                    fontWeight: 700,
                                }}
                            >
                                {author}
                            </Text>
                        </View>

                        <View
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 360,
                                backgroundColor: "gray",
                            }}
                        ></View>
                    </View>
                </View>

            </LinearGradient>
        </ImageBackground>

    );
}
