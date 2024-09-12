import React from 'react';
//import type {PropsWithChildren} from 'react';
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
const styles = StyleSheet.create({
    item: {
        fontSize: 14,
        color: "#fff",
        backgroundColor: "blue",
        borderColor: "green",
        borderWidth: 5,
        margin: 5,
        padding: 5,
        width: 120,
        height: 120,
        textAlignVertical: 'center',
        textAlign: 'center',
    }
})
function GridTest() {
    const user = [
        {
            id: "1",
            name: "Awwww"
        },
        {
            id: "2",
            name: "Beeee"
        },
        {
            id: "3",
            name: "Cfffff"
        },
        {
            id: "4",
            name: "Dwwwww"
        },
        {
            id: "5",
            name: "Errrrrrdd"
        },
        {
            id: "6",
            name: "Awwww"
        },
        {
            id: "7",
            name: "Beeee"
        },
        {
            id: "8",
            name: "Cfffff"
        },
        {
            id: "9",
            name: "Dwwwww"
        },
        {
            id: "10",
            name: "Errrrrrdd"
        },
        {
            id: "11",
            name: "Awwww"
        },
        {
            id: "12",
            name: "Beeee"
        },
        {
            id: "13",
            name: "Cfffff"
        },
        {
            id: "14",
            name: "Dwwwww"
        },
        {
            id: "15",
            name: "Errrrrrdd"
        }
    ]
    return (
        <ScrollView style={{ marginBottom: 60 }}>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    user.map((item) => <Text style={styles.item}>{item.name}</Text>)
                }
            </View>
        </ScrollView>
    );
}

export default GridTest