import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Image, Text, StyleSheet, TouchableHighlight, View } from "react-native";
import { Product } from "../../app/types";

type ProductListingsProps = {
    data: Product[]
}
const ProductListings: React.FC<ProductListingsProps> = ({ data }) => {
    const navigation: any = useNavigation();
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={style.bigWrap}>
                {data?.slice()
                    .sort((a, b) => a.order - b.order)
                    .map((item, key) => {
                        return (
                            <TouchableHighlight
                                key={key}
                                style={style.wrap}
                                onPress={() =>
                                    navigation.navigate("ProductDetails", {
                                        paramKey: item.id,
                                    })
                                }
                            >
                                <View style={[{ backgroundColor: item.backgroundColor }, style.product]}>
                                    <Image
                                        source={{ uri: item.image1 }}
                                        style={{
                                            height: 200,
                                            width: "100%",
                                            borderRadius: 10,
                                            resizeMode: "stretch",
                                        }}
                                    />
                                    <View style={{ flexDirection: "row", padding: 5, justifyContent: "space-between", alignItems: "center", }}>
                                        <Text
                                            style={{
                                                marginTop: 5,
                                                marginBottom: 3,
                                                marginLeft: 5,
                                                color: item.textColor
                                            }}
                                        >
                                            {item.title}
                                        </Text>
                                        {item.ukOnly && (
                                            <Image
                                                source={require("../../../assets/images/ukFlag.png")}
                                                style={{ height: 20, width: 20, borderRadius: 2 }}
                                            />
                                        )}
                                    </View>
                                    <Text
                                        style={{
                                            backgroundColor: item.accentColor,
                                            paddingTop: 5,
                                            color: item.textColor,
                                            width: "100%",
                                            textAlign: "center",
                                            borderRadius: 10,
                                            position: "absolute",
                                            bottom: 0,
                                            height: 35,
                                        }}
                                    >
                                        $ {item.price}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        );
                    })}
            </View>
            <View style={style.moreBtn}>
                <Text style={{ color: "#fff", textAlign: "center" }}>
                    more
                </Text>
            </View>
        </ScrollView>

    )
}

const style = StyleSheet.create({
    bigWrap: {
        width: "96%",
        display: "flex",
        flexDirection: "row",
        marginLeft: "2%",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    wrap: {
        width: "48%",
        backgroundColor: "transparent",
        height: 300,
        marginTop: 15,
    },
    product: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    moreBtn: {
        width: 70,
        height: 30,
        textAlign: "center",
        color: "#fff",
        borderRadius: 5,
        marginLeft: "42%",
        backgroundColor: "#fd7c72",
        marginTop: 20,
        marginBottom: 20,
    },
});

export default ProductListings;