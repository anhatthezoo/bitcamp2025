import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import { useContext, useState, useEffect } from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    type User,
} from "firebase/auth";
import {
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    where,
} from "firebase/firestore";
import { auth, firestore } from "@/firebaseConfig";
import { ThemeContext } from "@/app/theme";
import { router, useRouter } from "expo-router";

export default function Home() {
    const theme = useContext(ThemeContext).theme;
    const [currentUser, setCurrentUser] = useState<User | null>(
        auth.currentUser
    );
    const [userRecipes, setUserRecipes] = useState<
        { name: string; id: string; cooklang: string }[]
    >([]);

    useEffect(() => {
        const fetchUserRecipes = async () => {
            if (auth.currentUser) {
                const user = auth.currentUser;
                const recipesRef = collection(firestore, "recipes");
                const userRecipesDocs = await getDocs(
                    query(recipesRef, where("owner", "==", user.uid))
                );
                const recipes = userRecipesDocs.docs.map((doc) => ({
                    name: doc.data().name,
                    id: doc.id,
                    cooklang: doc.data().cooklang,
                }));
                setUserRecipes(recipes);
            }
        };

        fetchUserRecipes();
    }, [currentUser]);

    return (
        <ScrollView
            style={{ backgroundColor: "white" }}
            contentInsetAdjustmentBehavior={"automatic"}
        >
            {currentUser !== null && (
                <View
                    style={{
                        paddingHorizontal: theme.horizontalInset,
                        paddingVertical: 16,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "DM-Serif",
                            fontSize: 24,
                            lineHeight: 32,
                        }}
                    >
                        You are logged in as: {currentUser.displayName}
                    </Text>

                    {userRecipes.map((recipe) => (
                        <Pressable
                            key={recipe.id}
                            style={{
                                padding: 16,
                                borderBottomWidth: 1,
                                borderColor: "rgba(0, 0, 0, 0.1)",
                            }}
                            onPress={() =>
                                router.push({
                                    pathname: "/recipes",
                                    params: {
                                        id: recipe.id,
                                        name: recipe.name,
                                        cooklang: recipe.cooklang,
                                    },
                                })
                            }
                        >
                            <Text
                                style={{
                                    fontFamily: "Manrope",
                                    fontSize: 16,
                                    lineHeight: 24,
                                    fontWeight: 700,
                                }}
                            >
                                {recipe.name}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            )}
            {currentUser === null && (
                <AuthScreen setCurrentUser={setCurrentUser} />
            )}
        </ScrollView>
    );
}

type AuthScreenProps = {
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

function AuthScreen({ setCurrentUser }: AuthScreenProps) {
    const theme = useContext(ThemeContext).theme;

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [displayName, setDisplayName] = useState<string>("");

    const signUp = () => {
        console.log(email, password);

        if (!email || !password) {
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (newUser) => {
                await updateProfile(newUser.user, { displayName: displayName });
                await setDoc(doc(firestore, "users", newUser.user.uid), {
                    email: newUser.user.email,
                    displayName: newUser.user.displayName,
                    recipes: [],
                    cart: [],
                });

                console.log(
                    `Created user with email ${newUser.user.displayName} ssd`
                );

                signIn();
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    const signIn = () => {
        if (!email || !password) {
            return;
        }

        console.log(`Signing in user with email ${email}$`);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCreds) => {
                setCurrentUser(userCreds.user);
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    return (
        <View
            style={{
                paddingHorizontal: theme.horizontalInset,
                paddingTop: 16,
                gap: 8,
            }}
        >
            <Text
                style={{ fontFamily: "DM-Serif", fontSize: 24, lineHeight: 32 }}
            >
                Sign up
            </Text>

            <TextInput
                placeholder="Email"
                style={{
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.35)",
                    padding: 16,
                    borderRadius: 8,
                }}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={{
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.35)",
                    padding: 16,
                    borderRadius: 8,
                }}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                placeholder="Username"
                style={{
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.35)",
                    padding: 16,
                    borderRadius: 8,
                }}
                onChangeText={(text) => setDisplayName(text)}
            />

            <Pressable
                style={{
                    backgroundColor: "#BC6C25",
                    padding: 16,
                    borderRadius: 8,
                }}
                onPress={() => signUp()}
            >
                <Text style={{ color: "white" }}>Sign up</Text>
            </Pressable>

            <Text
                style={{ fontFamily: "DM-Serif", fontSize: 24, lineHeight: 32 }}
            >
                Sign in
            </Text>

            <TextInput
                placeholder="Email"
                style={{
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.35)",
                    padding: 16,
                    borderRadius: 8,
                }}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={{
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.35)",
                    padding: 16,
                    borderRadius: 8,
                }}
                onChangeText={(text) => setPassword(text)}
            />

            <Pressable
                style={{
                    backgroundColor: "#BC6C25",
                    padding: 16,
                    borderRadius: 8,
                }}
                onPress={() => signIn()}
            >
                <Text style={{ color: "white" }}>Sign in</Text>
            </Pressable>
        </View>
    );
}
