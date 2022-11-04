import React, { useState } from "react";
import { View, Text, Switch } from "react-native"

type SwitchToggleProps = {
    show?: boolean,
    toggleSwitch: ()=>void
}
const SwitchToggle: React.FC<SwitchToggleProps> = ({show,toggleSwitch}) => {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                width: "96%",
                marginLeft: "2%",
                alignItems: "center",
                justifyContent: "flex-end",
            }}
        >
            <Text style={{ fontWeight: "bold" }}>Toggle view: </Text>
            <View>
                <Switch
                    testID="switch"
                    tintColor="transparent"
                    thumbTintColor={show ? "#51c39d" : "#cccccc"}
                    onTintColor="transparent"
                    value={show ? true:false}
                    style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                    onValueChange={toggleSwitch}
                />
            </View>
        </View>
    )
}

export default SwitchToggle;