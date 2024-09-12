import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import RadioSelection from './RadioSelection';
const MyButton = () => {
    return (
        <View style={styles.main}>
            <TouchableHighlight>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Success</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight>
                <View style={[styles.btn, styles.backClr1]}>
                    <Text style={styles.btnText}>Next</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight>
                <View style={[styles.btn, styles.login]}>
                    <Text style={styles.btnText} >Login</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight>
                <View style={[styles.btn, styles.register]}>
                    <Text style={styles.btnText}>Register</Text>
                </View>
            </TouchableHighlight>
            <RadioSelection/>
        </View>
    );
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor:'yellow'
    },
    btnText:{
textAlign:'center',
fontSize:20,
color: '#000',
    },
    btn: {
        backgroundColor: 'gray',
        borderRadius: 15,
        padding: 10,
        margin: 10,
        elevation: 5,
        shadowOpacity: 0.3,
        shadowColor: 'black',
    },
    backClr1: { backgroundColor: 'green' },
    login: { backgroundColor: 'violet' },
    register: { backgroundColor: 'blue' }

})
export default MyButton