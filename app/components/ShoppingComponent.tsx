import { View, Image, ImageBackground, Text, StyleSheet } from "react-native";
import { useState } from 'react';
import Checkbox from 'expo-checkbox';


type CartItemsProps = {
    imagePath: string;
    itemName: string;
    storeName: string;
    priceNumber: number;
}

export default function CartItems({
    imagePath,
    itemName,
    storeName,
    priceNumber
}: CartItemsProps
) {

    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.wholeItem}>
            <View style={styles.nameAndImageHolder}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />

                <Image
                    style={styles.itemImage}
                    source={{uri: imagePath}}
                />
                <View style={styles.nameHolder}>
                    <Text style={styles.itemText}>
                        {itemName}
                    </Text>
                    <Text style={styles.storeText}>
                        {storeName}
                    </Text>
                </View>
            </View>
            <Text style={styles.cost_text}>
                ${priceNumber}
            </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    wholeItem: {
        flexDirection: 'row',
        width: 370,
        height: 72,
        padding: 16,
        paddingTop: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'rgba(0, 0, 0, 0.10)',
        borderBottomWidth: 1,
    },

    nameAndImageHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },

    nameHolder: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
    },

    itemImage: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        borderRadius: 8,
        overflow: 'hidden'
    },

    itemText: {
        color: 'black',
        fontFamily: 'Manrope',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 20,
        flexGrow: 0,
    },

    storeText: {
        color: 'rgba(0, 0, 0, 0.45)',
        fontFamily: 'Manrope',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 20,
        flexGrow: 0,
    },

    text_holder: {
        flexDirection: "row",
        alignItems: 'flex-end',
        flexGrow: 0,
        gap: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.00)'
    },

    cost_holder: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    cost_text: {
        color: '#000',

        fontFamily: "DM Serif Display",
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 32
    },

    checkbox: {
        margin: 8,
    },


})


