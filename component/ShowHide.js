import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const ShowHide = () => {

    useEffect(() => {
        console.warn("--------ShowHide-------")
    }, [])
    useEffect(() => {
        return () => { console.warn("--------UnMount-------") }
    },)
    return (
        <View style={styles.main}>
            <View style={styles.box1}>
                <View style={styles.boxA1} />
                <View style={styles.boxA2} />
                <View style={styles.boxA3} />
            </View>
            <View style={styles.box2} />
            <View style={styles.box3} />
        </View>
    );
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    box1: {
        flex: 1,
        backgroundColor: 'green',
        flexDirection:'row'
    },
    box2: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    box3: {
        flex: 1,
         backgroundColor: 'blue'
    },
    boxA1: {
        flex: 1,
         backgroundColor: 'pink',
         margin:2,
         padding:2
    },
    boxA2: {
        flex: 1,
         backgroundColor: 'violet',
         margin:2,
         padding:2
    },
    boxA3: {
        flex: 1,
         backgroundColor: 'red',
         margin:2,
         padding:2
    },
    txt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        margin: 10,
    }
});
export default ShowHide