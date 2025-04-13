import { ThemeContext } from "@/app/theme";
import { useContext, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Search, X } from "lucide-react-native";

export default function SearchHeader() {
    const theme = useContext(ThemeContext).theme;
    return (
        <View
            style={{
                gap: 8,
                paddingHorizontal: theme.horizontalInset,
                paddingBottom: 8,
                borderBottomWidth: 1,
                borderColor: "rgba(0, 0, 0, 0.05)"
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    borderRadius: 10,
                    backgroundColor: "#E5E5EA",
                }}
            >
                <Search size={16} color="rgba(0, 0, 0, 0.35)" />
                <TextInput
                    style={{ flex: 1, paddingLeft: 8 }}
                    placeholder="Search"
                    placeholderTextColor="rgba(0, 0, 0, 0.35)"
                />
            </View>

            <View style={{ flexDirection: "row", gap: 8 }}>
                <Tag name="Filter 1" />
                <Tag name="Filter 2" />
                <Tag name="Filter 3" />
            </View>
        </View>
    );
}

type TagProps = {
    name: string;
};

function Tag({ name }: TagProps) {
    const [isActive, setIsActive] = useState(false);

    const toggleIsActive = () => {
        setIsActive(!isActive);
    };

    return (
        <Pressable
            onPress={() => toggleIsActive()}
            style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 360,
                borderColor: "rgba(238, 206, 159, 0.4)",
                borderWidth: 1,
                backgroundColor: isActive ? "#BC6C25" : "transparent",
                flexDirection: "row",
                gap: 4
            }}
        >
            <Text style={{ color: isActive ? "white" : "#BC6C25" }}>{name}</Text>
            {isActive && <X size={16} color="white"/>}
            
        </Pressable>
    );
}
