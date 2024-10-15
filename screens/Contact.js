import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Contact = () => {
    return (
        <View style={styles.center}>
            <Text>Componente Contact</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }
});

export default Contact;