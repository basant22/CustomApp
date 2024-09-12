import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default CustomModal = (props) => {
    const [show, setShow] = useState(false)
    const showAlert = () => {
        setShow(true)
    }
    const hideAlert = () => {
        setShow(false)
    }
    return (
        <View style={styles.main}>
            <View style={styles.customWrapper}>
                {
                    show ?
                        <View style={styles.customView}>
                            <View style={{ height: 5 }} />
                            <View >
                                <Text style={{ textAlign: 'center', fontSize: 17, color: 'white' }}>My Custom Dialog</Text>
                                <Text style={{ textAlign: 'center', fontSize: 17, color: 'white' }}>{props.route.params.name}</Text>
                            </View>
                            <View style={{ height: 190 }} />
                            <TouchableHighlight onPress={hideAlert}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Success</Text>
                                </View>
                            </TouchableHighlight>
                        </View> : null
                }


            </View>
            <TouchableHighlight onPress={showAlert}>
                <View style={styles.btnshow}>
                    <Text style={styles.btnText}>Show Alert</Text>
                </View>
            </TouchableHighlight>
            <View style={{ height: 50 }} />
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    customWrapper: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    customView: {
        borderRadius: 15,
        backgroundColor: 'gray',
        height: 300,
        width: 300,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 5,

    },
    btnText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
    },
    btn: {
        backgroundColor: 'skyblue',
        borderRadius: 15,
        padding: 10,
        margin: 10,
        elevation: 5,
        shadowOpacity: 0.3,
        shadowColor: 'black',
    },
    btnshow: {
        backgroundColor: 'grey',
        borderRadius: 15,
        padding: 10,
        margin: 10,
        elevation: 5,
        shadowOpacity: 0.3,
        shadowColor: 'black',
    },
})
