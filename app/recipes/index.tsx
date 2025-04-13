import { firestore } from "@/firebaseConfig";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import {
    getDoc,
    doc,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { ChevronLeft, CircleDollarSign, Clock } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { parsingCook } from "../lib/cooklang/parseCookfile";

export default function RecipeScreen() {
    const params = useSearchParams();
    const insets = useSafeAreaInsets();
    const imageHeight = 256;
    const [contributors, setContributors] = useState<string[]>([]);
    const [prepTime, setPrepTime] = useState<number>(0);
    const [cost, setCost] = useState<number>(0);
    const [difficulty, setDifficulty] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);
    const [cooklang, setCooklang] = useState<string>("");

    const formatTime = (hours: number): string => {
        const fullHours = Math.floor(hours); // Get the whole number of hours
        const minutes = Math.round((hours - fullHours) * 60); // Get the remaining minutes

        if (fullHours > 0 && minutes > 0) {
            return `${fullHours}h${minutes}m`; // Combine hours and minutes
        } else if (fullHours > 0) {
            return `${fullHours}h`; // Only hours
        } else {
            return `${minutes}m`; // Only minutes
        }
    };

    useEffect(() => {
        const fetchContributors = async () => {
            try {
                const recipeId = params.get("id");
                if (!recipeId) {
                    console.error("Recipe ID not found in params");
                    return;
                }

                const recipeDoc = await getDoc(
                    doc(firestore, "recipes", recipeId)
                );

                const {
                    name,
                    owner,
                    prepTime,
                    cost,
                    difficulty,
                    tags,
                    versions,
                } = recipeDoc.data() as {
                    name: string;
                    owner: string;
                    prepTime: number;
                    cost: number;
                    difficulty: number;
                    tags: string[];
                    versions: string[];
                };
                setPrepTime(prepTime);
                setCost(!cost ? 1 : cost);
                setDifficulty(
                    difficulty == 0
                        ? "Easy"
                        : difficulty == 1
                        ? "Medium"
                        : "Hard"
                );
                setTags(tags);

                const contributersIdSet = new Set<string>();
                const recipeVersionsRef = collection(
                    firestore,
                    "recipeVersions"
                );
                let cooklangFile = "";

                for (const versionId of versions) {
                    const versionDocs = await getDocs(
                        query(recipeVersionsRef, where("id", "==", versionId))
                    );
                    versionDocs.forEach((doc) => {
                        if (doc.data().modifiedBy) {
                            contributersIdSet.add(doc.data().modifiedBy);

                            if (cooklang === "") {
                                cooklangFile = doc.data().cooklang.replace(/\\n/g, "\n").replace(/\n\s*\n/g, "\n\n")
                            }
                        }
                    });
                }

                const source = `
>> source: https://www.dinneratthezoo.com/wprm_print/6796
>> total time: 6 minutes
>> servings: 2

Place the @apple juice{1,5%cups}, @banana{one sliced}, @frozen mixed berries{1,5%cups} and @vanilla greek yogurt{3/4%cup} in a #blender{}; blend until smooth. If the smoothie seems too thick, add a little more liquid (1/4 cup).

Taste and add @honey{} if desired. Pour into two glasses and garnish with fresh berries and mint sprigs if desired.
`;

                console.log(cooklangFile)
                setCooklang(cooklangFile);
                console.log(parsingCook(source).steps);

                const usersRef = collection(firestore, "users");
                let contributorsArray: string[] = [];

                for (const userId of contributersIdSet) {
                    const userDoc = await getDoc(doc(usersRef, userId));
                    if (userDoc.exists()) {
                        contributorsArray.push(userDoc.data().displayName);
                    }
                }

                setContributors(contributorsArray);
            } catch {
                console.error("Failed to fetch recipe contributors");
            }
        };

        fetchContributors();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    title: "",
                    headerTransparent: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <ChevronLeft size={28} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Animated.ScrollView style={{ backgroundColor: "white" }}>
                <Animated.Image
                    source={{
                        uri: "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png",
                    }}
                    style={{
                        height: imageHeight,
                        width: Dimensions.get("window").width,
                    }}
                />

                <View
                    style={{
                        paddingHorizontal: 16,
                        paddingTop: 16,
                        paddingBottom: 8,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "DM-Serif",
                            fontSize: 36,
                            lineHeight: 44,
                        }}
                    >
                        {params.get("name")}
                    </Text>

                    <View style={{ gap: 8 }}>
                        <Text
                            style={{
                                color: "rgba(0, 0, 0, 0.4)",
                                fontFamily: "Manrope",
                                fontSize: 14,
                                lineHeight: 20,
                                fontWeight: 700,
                            }}
                        >
                            {contributors.join(" • ")}
                        </Text>

                        <View style={{ flexDirection: "row", gap: 4 }}>
                            <Clock size={24} color={"black"} />
                            <Text
                                style={{
                                    fontFamily: "Manrope",
                                    fontSize: 14,
                                    lineHeight: 22,
                                    fontWeight: 700,
                                }}
                            >
                                {formatTime(prepTime)}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Manrope",
                                    fontSize: 14,
                                    lineHeight: 22,
                                    fontWeight: 700,
                                    paddingHorizontal: 2,
                                }}
                            >
                                •
                            </Text>
                            <CircleDollarSign size={24} color={"black"} />
                            <Text
                                style={{
                                    fontFamily: "Manrope",
                                    fontSize: 14,
                                    lineHeight: 22,
                                    fontWeight: 700,
                                }}
                            >
                                {"$".repeat(cost)}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Manrope",
                                    fontSize: 14,
                                    lineHeight: 22,
                                    fontWeight: 700,
                                    paddingHorizontal: 2,
                                }}
                            >
                                •
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Manrope",
                                    fontSize: 14,
                                    lineHeight: 22,
                                    fontWeight: 700,
                                    paddingHorizontal: 2,
                                }}
                            >
                                {`Difficulty: ${difficulty}`}
                            </Text>
                        </View>

                        <View>
                            {tags.map((tag) => (
                                <View
                                    style={{
                                        alignSelf: "flex-start",
                                        borderRadius: 360,
                                        paddingHorizontal: 8,
                                        paddingVertical: 4,
                                        borderWidth: 1,
                                        borderColor: "#BC6C25",
                                        backgroundColor:
                                            "rgba(188, 108, 37, 0.25)",
                                    }}
                                    id={`${tag}${Date.now()}`}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "Manrope",
                                            fontSize: 14,
                                            lineHeight: 20,
                                            color: "#rgba(188, 108, 37, 1)",
                                        }}
                                    >
                                        {tag}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "DM-Serif",
                                fontSize: 24,
                                lineHeight: 32,
                            }}
                        >
                            Ingredients
                        </Text>

                        <TouchableOpacity>
                            <View
                                style={{
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
                                    Add to cart
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </Animated.ScrollView>
        </View>
    );
}

function CustomHeader() {
    const insets = useSafeAreaInsets();

    return (
        <Animated.View>
            <SafeAreaView>
                <Text>dfdf</Text>
            </SafeAreaView>
        </Animated.View>
    );
}
