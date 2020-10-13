import React from "react";
import { View, Text, StyleSheet, Image,Dimensions } from "react-native";

const NewsCard = ({news}) => {
    return (
        <View style={styles.container} >
            <Image
            source={{ uri: news.imageUrl }}
            style={styles.image}
            />
            <Text style={styles.title} >{news.title}</Text>
            <Text style={styles.description} >{news.description}</Text>
        </View>
    );
}

export {NewsCard};


const styles = StyleSheet.create({
    container: {
        // width: Dimensions.get("window").width * 0.45,
        borderWidth: 1,
        borderColor: "#eceff1",
        padding: 5,
        margin: 5,
        borderRadius: 5
    },
    title: {
        fontWeight: "bold",
        fontSize: 15,
    },
    description: {
    },
    image: {
        height: Dimensions.get("window").height * 0.30,
        borderRadius: 6,
        resizeMode: "center"
    }
})