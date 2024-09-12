import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const NewComponent = (props) => {
    const item = props.item;
    return (
        <View style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.age}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        fontSize: 16,
        flex: 1,
        color: 'white',
        textAlign: 'center',
        // backgroundColor:'gray',
       
    },
    box: {
        flexDirection: 'row',
        borderWidth: 4,
        borderColor: 'green',
        margin:5,
        padding:10,
        borderRadius:10
    }
})
export default NewComponent