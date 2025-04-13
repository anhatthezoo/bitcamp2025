import { Tabs } from "expo-router";
import { House, Star, ShoppingCart, UserRound } from "lucide-react-native"

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "#BC6C25", headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <House size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title:"Favorites",
                    tabBarIcon: ({ color }) => <Star size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color }) => <ShoppingCart size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title:"Profile",
                    tabBarIcon: ({ color }) => <UserRound size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
