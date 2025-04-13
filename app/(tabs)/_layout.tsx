import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title:"Favorites"
                }}
            />
        </Tabs>
    );
}
