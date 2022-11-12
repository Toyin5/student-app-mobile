import { View, ActivityIndicator } from "react-native";
import React from "react";

const Loader = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
            }}
        >
            <ActivityIndicator size={"large"} color={"#006aff"} />
        </View>
    );
};

export default Loader;
