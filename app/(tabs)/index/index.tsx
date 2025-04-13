import { ThemeContext } from "@/app/theme";
import { useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { ScrollView } from "react-native";
import SearchHeader from "@/app/components/SearchHeader";
import RecipeBox from "@/app/components/RecipeBox";

export default function Home() {
    const theme = useContext(ThemeContext).theme;
    return (
        <ScrollView
            style={{ backgroundColor: "white" }}
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
                    >
                        <RecipeListLargeItem
                            id=""
                            name="Recipe name"
                            author="John Doe"
                            iconUri=""
                            imageUri=""
                        />

                        <RecipeListLargeItem
                            id=""
                            name="Recipe name"
                            author="John Doe"
                            iconUri=""
                            imageUri=""
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

                    <View style={{ gap: 8 }}>
                        <View style={{flexDirection: "row", gap: 8}}>
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
                        <View style={{flexDirection: "row", gap: 8}}>
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
        <View
            style={{
                width: 290,
                height: 120,
                borderRadius: 8,
                padding: 8,
                backgroundColor: "red",
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
    );
}
