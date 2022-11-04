import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  ToastAndroid
} from "react-native";
import { useProductsQuery } from "../../app/productsApi";
import ProductListings from "./listProducts";
import Loading from "./loading";
import ImageCarousel from "./productCarousel";
import SwitchToggle from "./switch";

const ProductsPage = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const navigation: any = useNavigation();
  const { data,error, isLoading } = useProductsQuery();
  function showToast(err: any) {
    ToastAndroid.show(err.error, ToastAndroid.SHORT);
  }
  useEffect(()=>{
    if (error){
      showToast(error)
    }
  },[error])

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {isLoading ? (
          <Loading />
        ) : isEnabled ? (
          <>
            <SwitchToggle show={isEnabled} toggleSwitch={()=>setIsEnabled(!isEnabled)} />
            <ImageCarousel data={data?.slice().sort((a, b) => a.order - b.order)} />
          </>
        ) : (
          <>
            <SwitchToggle show={isEnabled} toggleSwitch={()=>setIsEnabled(!isEnabled)} />
            <ProductListings data={data? data : []} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ProductsPage;
