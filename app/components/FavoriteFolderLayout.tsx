import { View, Image, Button, ImageBackground, Alert, Text, StyleSheet } from "react-native";
import FolderSVG from "./folderSVGComponent";


type FolderLayoutProps = {
    collectionName?: string;
    collectionOwner?: string;
    imageUrl?: string;
}

export default function FolderLayout({
    collectionName,
}: FolderLayoutProps
) {

    return (
        <View style={styles.folder}>
        <FolderSVG />
        <Text style={styles.folderName}>
            {collectionName}
        </Text>
        </View>

        
        
    )
}

const styles = StyleSheet.create({
    folder: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10
    },

    folderName: {
        color: '#000',
        fontFamily: 'Manrope',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 20
    }
})