// ./screens/Setting.js

import React from "react";
import { View, Text, StyleSheet, Settings } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>Pagina de Setting</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default Settings;


