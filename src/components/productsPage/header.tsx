import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../../app/types";
type HeaderProps = {
    data: Product|any
}
const Header: React.FC<HeaderProps> = ({ data }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <MaterialCommunityIcons
                onPress={() => {
                    navigation.goBack();
                }}
                style={{ color: data?.textColor, marginRight: 10 }}
                name="arrow-left-thin"
                size={30}
            />
            <Text style={{ fontWeight: "bold", color: data?.textColor }}>{data?.title}</Text>
            <View style={{ alignSelf: "center" }}>
                <Text style={[{ color: data?.accentColor }, styles.cartAmount]}>5</Text>
                <MaterialCommunityIcons
                    style={{ color: data?.textColor, marginRight: 10 }}
                    name="cart"
                    size={30}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        display: "flex",
        color: "#fff",
        top: 0,
        flexDirection: "row",
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
    },
    HeaderTitle: {
        fontSize: 16,
        textTransform: "uppercase",
        color: "#000",
        alignSelf: "center",
    },
    cartAmount: {
        position: "absolute",
        right: 5,
        top: -10,
    },
});

export default Header;
