import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Dimensions, ToastAndroid } from "react-native";
import { Text, View, Image } from "react-native";
import Loading from "./loading";
import { useProductDetailsQuery } from "../../app/productsApi";
import Header from "./header";


/**
 * @function ProductDetails
 * @param {route} route route parameters
 * @returns all the details of a product as a component
 */
const ProductDetails = ({ route }: any) => {
  const { data, isLoading, error } = useProductDetailsQuery(route.params.paramKey);

  function showToast(err: any) {
    ToastAndroid.show(err.error, ToastAndroid.SHORT);
  }
  React.useEffect(() => {
    if (error) {
      showToast(error)
    }
  }, [error])

  return (
    <SafeAreaView style={[{ backgroundColor: data?.backgroundColor }, styles.container]}>
      {isLoading ? (
        <Loading />
      ) : (<><Header data={data} />
        <ScrollView>
          <View style={{ flex: 1, backgroundColor: data?.backgroundColor }}>
            <View style={styles.product}>
              <Image
                source={{ uri: data?.image1 }}
                style={{
                  height: 300,
                  width: "100%",
                  borderRadius: 10,
                  resizeMode: "stretch",
                }}
              />
              <View style={{ width: "100%", flex: 1, }}>
                <Text style={{ marginTop: 5, color: data?.textColor, marginBottom: 3, marginLeft: 5, }}>
                  <Text style={{ fontWeight: "bold" }}>Name: {data?.title + "  "}</Text>
                  {data?.ukOnly && (
                    <Image
                      source={require("../../../assets/images/ukFlag.png")}
                      style={{ height: 20, width: 20 }}
                    />
                  )}
                </Text>
                <Text style={{ marginTop: 5, color: data?.textColor, marginBottom: 3, marginLeft: 5 }}>
                  <Text style={{ fontWeight: "bold", }}>BinomialName:</Text>{" "}
                  {data?.binomialName}
                </Text>
                <Text
                  testID="product-price"
                  style={{ marginTop: 5, color: data?.textColor, marginBottom: 3, marginLeft: 5 }}
                >
                  <Text style={{ fontWeight: "bold", }}>Price:</Text>{" "}
                  {data?.price}
                </Text>
                <Text style={{ marginTop: 5, color: data?.textColor, lineHeight: 25, marginBottom: 3, marginLeft: 5 }}>
                  <Text style={{ fontWeight: "bold", }}>Description:</Text>{" "}
                  {data?.description}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView></>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFDFD",
    flex: 1,
  },
  product: {
    width: "95%",
    marginLeft: "2.5%",
    minHeight: Dimensions.get('window').height,
    paddingBottom: 15,
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 28,
  },

});
export default ProductDetails;
